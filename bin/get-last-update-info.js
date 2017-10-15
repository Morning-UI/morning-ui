const path                          = require('path');
const fs                            = require('fs');
const spawn                         = require('child_process').spawn;
const fsExtra                       = require('fs-extra');
const got                           = require('got');

const COMPONENT_DIR                 = path.resolve(__dirname, '../src/lib/components/');
const REPORT_DIR                    = path.resolve(__dirname, '../report/updatelog/');

let dirs = fs.readdirSync(COMPONENT_DIR);
let userList = {};

fsExtra.emptyDirSync(REPORT_DIR);

let getUserInfo = async (user) => {

    if (!userList[user.mail]) {

        let result = await got(`https://api.github.com/search/users?q=${user.mail}`, {
            json : true
        });

        userList[user.mail] = {
            avatar : result.body.items[0].avatar_url,
            github : result.body.items[0].html_url
        };

    }

    user.avatar = userList[user.mail].avatar;
    user.github = userList[user.mail].github;

};

let getUpdateInfo = async () => {

    for (let dirName of dirs) {

        let lastUpdate = {};
        let componentDir = `${COMPONENT_DIR}/${dirName}`;
        let gitLog = spawn('git', [
            'log',
            '-1',
            '--pretty=format:"%H|||%h|||%an|||%ae|||%ad|||%s|||%ar"',
            '--date=format:"%Y/%m/%d %H:%M:%S"',
            componentDir
        ]);

        await new Promise(resolve => {

            gitLog.stdout.on('data', data => {

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
            gitLog.stdout.on('close', resolve);

        });

        await getUserInfo(lastUpdate);

        let gitTag = spawn('git', [
            'tag',
            '--contains',
            lastUpdate.cid
        ]);

        await new Promise(resolve => {

            gitTag.stdout.on('data', data => {

                data = data.toString().split('\n');
                data = data[0];
                lastUpdate.version = data;

            });
            gitTag.stdout.on('close', resolve);

        });

        let gitContributors = spawn('git', [
            'log',
            '--pretty=format:"%an|||%ae"',
            componentDir
        ]);

        await new Promise(resolve => {

            gitContributors.stdout.on('data', data => {

                data = data.toString().split('\n');
                data.shift();
                lastUpdate.contributors = [];

                for (let contributor of data) {
                    
                    let info = contributor.replace(/((^")|("$))/g, '').split('|||');

                    lastUpdate.contributors.push({
                        name : info[0],
                        mail : info[1]
                    });

                }

            });

            gitContributors.stdout.on('close', resolve);

        });

        for (let user of lastUpdate.contributors) {

            await getUserInfo(user);

        }

        fs.writeFileSync(`${REPORT_DIR}/${dirName}.json`, JSON.stringify(lastUpdate));

    }
    
};

getUpdateInfo();
