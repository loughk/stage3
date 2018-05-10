const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const utilRes = require('../util/utilRes.js');
const utilMongo = require('../util/utilMongo.js');
const routerSession = require('./routerSession.js');
const routerSign = require('./routerSign.js');

const app = express();
app.use(express.static(path.join(__dirname, '../')));

routerSession.register(app);

utilMongo.connect('finaltest','mongodb://localhost:27017/');
app.use(bodyParser.urlencoded({extended:false}));
routerSign.register(app,utilMongo,utilRes);



const socketio = require('socket.io');
const httpApp = http.Server(app);
const io = socketio(httpApp);
const routerSocketio = require('./routerSocketio.js');
routerSocketio.register(io);



// httpApp || app;
const server = httpApp;
module.exports = {
    'listen':function(port){
        server.listen(port || 6655);
    }
};