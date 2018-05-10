const express = require('express')
const path = require('path')
const app = express();

const bodyParser = require('body-parser');

// 第三方插件 cookie-parser : 方便操作cookie。
const cookieParser = require('cookie-parser');
// 第三方插件 express-session : 方便操作session。
// express-session 1.5.0 版本以后已经不依赖于cookie-parser,如果共用,要注意secret属性要一致。
const expressSession = require('express-session');

app.use([
    cookieParser(),
    expressSession({
        secret: 'sessionencode',//签名:session对应所在cookie里的唯一id。
        name: 'cookiename',   //response中含有session id的cookie的name。
        cookie: {maxAge: 10000 },  //设置cookie有效期。
        resave: false,
        saveUninitialized: true
    }),
    bodyParser.urlencoded({extended: false}),
    express.static(path.join(__dirname, '/'))
]);

// seesion CRUD
app.get('/setsession', (request, response) => {
    request.session.attrs = {'attrs': 'vals'};
    response.send('set session success');
});

app.get('/getsession', (request, response) => {
    response.send(request.session.attrs);
});

app.get('/delsession', (request, response) => {
    delete reqeust.session.attrs;
    response.send(request.session.attrs);
});

app.listen(6655);