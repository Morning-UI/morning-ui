const path                          = require('path');
const fs                            = require('fs');
const fsExtra                      = require('fs-extra');
const spawn                         = require('child_process').spawn;

const COMPONENT_DIR                 = path.resolve(__dirname, '../src/lib/components/');
const REPORT_DIR                    = path.resolve(__dirname, '../report/updatelog/');

let dirs = fs.readdirSync(COMPONENT_DIR);

fsExtra.emptyDirSync(REPORT_DIR);

let getUpdateInfo = async () => {

    for (let dirName of dirs) {

        let componentDir = `${COMPONENT_DIR}/${dirName}`;
        let git = spawn('git', [
            'log',
            '-1',
            '--pretty=format:"%H|||%h|||%an|||%ae|||%ad|||%s|||%ar"',
            '--date=format:"%Y-%m-%d %H:%M:%S"',
            componentDir
        ]);
        let lastUpdate = {};

        await new Promise(resolve => {

            git.stdout.on('data', data => {

                data = data.toString().replace(/((^")|("$))/g, '');
                data = data.split('|||');

                let [
                    cid,
                    scid,
                    author,
                    mail,
                    date,
                    msg,
                    ar
                ] = data;

                lastUpdate = {
                    cid,
                    scid,
                    author,
                    mail,
                    date,
                    msg,
                    ar
                };

            });
            git.stdout.on('close', resolve);

        });

        fs.writeFileSync(`${REPORT_DIR}/${dirName}.json`, JSON.stringify(lastUpdate));

    }
    
};

getUpdateInfo();
