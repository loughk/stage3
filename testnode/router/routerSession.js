const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

function register(app){
    app.use([
        cookieParser(),
        expressSession({
            secret: 'sessionid',
            name: 'cookiename',
            cookie: {maxAge: 1800000 },
            resave: false,
            saveUninitialized: true
        })
    ]);
}

module.exports = {'register':register};