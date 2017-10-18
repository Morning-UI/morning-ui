const Koa                           = require('koa');
const route                         = require('koa-router');
const etag                          = require('koa-etag');
const conditional                   = require('koa-conditional-get');
const serve                         = require('koa-static');
const mount                         = require('koa-mount');
const compress                      = require('koa-compress');

const app = new Koa();
const router = route();

const CACHE_MAXAGE = 300000;
const WEB_PORT = 80;
const THRESHOLD = 2048;

app
    .use(compress({
        threshold : THRESHOLD
    }))
    .use(conditional())
    .use(etag())
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
    .use(router.allowedMethods())
    .listen(WEB_PORT);

/* eslint-disable no-console*/
console.log('Monring UI document service started(port 80).');
/* eslint-enable no-console*/
