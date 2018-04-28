const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// token
const jwt = require('jsonwebtoken');

const utilRes = require('../util/utilRes.js');
const utilMongo = require('../util/utilMongo.js');
// const routerSession = require('./routerSession.js');
const routerSign = require('./routerSign.js');
const routerMine = require('./routerMine.js');

const app = express();
app.use(express.static(path.join(__dirname, '../../')));

// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Accept,X-Requested-With,auth");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1')
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// routerSession.register(app);

utilMongo.connect('vue','mongodb://localhost:27017/');
app.use(bodyParser.urlencoded({extended:false}));
routerSign.register(app,{'jwt':jwt,'utilMongo':utilMongo,'utilRes':utilRes});

const filterJwt = function(req, res, next){
    var token = req.headers['auth'];
    if(!token){
        res.send(utilRes(false,{},'unauth'));
    }else{
        jwt.verify(token,'secret',function(jErr,jRes){
            if(jErr){
                res.send(utilRes(false, jErr, 'unauth'))
            }else{
                next();
            };
        });
    };
};
app.use(filterJwt);
routerMine.register(app,{'jwt':jwt,'utilMongo':utilMongo,'utilRes':utilRes});



// const socketio = require('socket.io');
// const httpApp = http.Server(app);
// const io = socketio(httpApp);
// const routerSocketio = require('./routerSocketio.js');
// routerSocketio.register(io);



// httpApp || app;
const server = app;
module.exports = {
    'listen':function(port){
        server.listen(port || 6655);
    }
};