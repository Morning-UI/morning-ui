const fs                            = require('fs');
const http                          = require('http');
const https                         = require('https');
const Koa                           = require('koa');
const route                         = require('koa-router');
const etag                          = require('koa-etag');
const conditional                   = require('koa-conditional-get');
const body                          = require('koa-body');
const serve                         = require('koa-static');
const mount                         = require('koa-mount');
const logger                        = require('koa-logger');
const compress                      = require('koa-compress');
const enforceHttps                  = require('koa-sslify');
const minimist                      = require('minimist');
const upyun                         = require('upyun');

const app = new Koa();
const router = route();

const CACHE_MAXAGE = 300000;
const WEB_PORT = 80;
const THRESHOLD = 2048;

let argvs = minimist(process.argv.slice(2));
let sslKey,
    sslCert;

try {

    sslKey = fs.readFileSync('/opt/certs/server.key');
    sslCert = fs.readFileSync('/opt/certs/server.pem');

} catch (e) {}

router
    .get('/package.json', async (ctx, next) => {
        
        ctx.set('Content-Type', 'application/json');
        ctx.body = fs.readFileSync('./package.json');

        next();

    })
    .get('/favicon.ico', async (ctx, next) => {
        
        ctx.body = fs.readFileSync('./favicon.ico');

        next();

    })
    .all('/api/uploadfile', async (ctx, next) => {

        await next();

        if (ctx.request.method === 'OPTIONS') {

            ctx.set('Access-Control-Allow-Origin', '*');
            ctx.body = {};

        }

    })
    .post('/api/uploadfile', body({
        multipart : true,
        formidable : {
            keepExtensions : true
        }
    }), async (ctx, next) => {
        
        const daytime = 86400000;
        const randomSize = 1e6;

        let service = new upyun.Service('morning-ui-image', 'morningdoc', 'morningdoc');
        let client = new upyun.Client(service);
        let file = ctx.request.body.files.file;
        let isfail = ctx.request.body.fail;
        let filetype = file.name.split('.').pop();
        let remotepath = `uploaddemo/${Math.floor(+new Date() / daytime)}/${String(+new Date()) + Math.floor(Math.random() * randomSize)}.${filetype}`;

        if (isfail) {

            ctx.body = {
                status : false,
                message : '图片上传服务器失败'
            };

        } else {
        
            await client
                .putFile(remotepath, fs.readFileSync(file.path), {})
                .then(resp => {

                    ctx.set('Access-Control-Allow-Origin', '*');
                    ctx.body = {
                        status : true,
                        path : `http://morning-ui-image.test.upcdn.net/${remotepath}`,
                        data : {
                            height : resp.height,
                            width : resp.width,
                            frames : resp.frames,
                            filetype : resp['file-type']
                        }
                    };

                });

        }

        next();

    });

if (sslKey) {

    app.use(enforceHttps());

}

app
    .use(compress({
        threshold : THRESHOLD
    }))
    .use(conditional())
    .use(etag())
    .use(logger())
    .use(mount('/dist', serve('./dist', {
        maxage : CACHE_MAXAGE
    })))
    .use(mount('/report', serve('./report', {
        maxage : CACHE_MAXAGE
    })))
    .use(mount('/', serve('./docs', {
        maxage : CACHE_MAXAGE
    })))
    .use(router.routes())
    .use(router.allowedMethods());

if (sslKey) {

    const sslPort = 443;

    let options = {
        key : sslKey,
        cert : sslCert
    };

    http.createServer(app.callback()).listen(argvs.port || WEB_PORT);
    https.createServer(options, app.callback()).listen(sslPort);

} else {

    app.listen(argvs.port || WEB_PORT);

}

/* eslint-disable no-console*/
console.log(`Monring UI document service started(port ${argvs.port || WEB_PORT}).`);
/* eslint-enable no-console*/
