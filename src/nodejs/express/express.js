;(function(){
    // 第三方模块express : 使nodejs方便易用。
    var express = require('express');
    // 创建http连接。
    var app = express();

    var path = require('path');

    // 模块express: express.static(path)托管静态文件的方法：可以访问到path路径下所有的静态文件。
    // 模块path:path.join(string)拼接路径的方法。
    // nodejs原生全局对象__dirname : 当前执行文件所在目录。
    var eps = express.static(path.join(__dirname, '/'));


    // 第三方模块body-parser : 简化nodejs的post请求
    // 依赖于express
    var bp = require('body-parser');

    // 将post请求体body的内容转码,这条转码的方式是application/x-http-form-urlencode,将utf-8字符串转成key-value形式的数据。
    // extended:false,设置用的是原生模块querystring。
    var bpe = bp.urlencoded({ extended: false });


    // filter形参中的req,res就是请求中的形参req,res。
    var filter = function(req,res,next){
        // next():成功,继续运行。next('string'):失败,停止运行,打印'string'。
        next();
    };
    // app.use([cb1,cb2,...])所有app请求都会按序执行cb。
    // use全局使用filter,app中的请求执行前都会先执行filter,方便提取公共代码。
    // app.请求([可选path],cb1,cb2,...)
    app.use([eps,bpe,filter]);

    

    // 创建mongo连接
    var crud = require('./mongoCRUD.js');
    crud.connect('dbname','mongodb://localhost:27017/');
    
    // app.post()转码依赖于body-parser。(pathname,content-type,cb)
    app.post('/',function (req,res){
        crud.select('t1',{'test1':'test1'},function(obj){
            res.send(obj);
        }); 
    })

    app.get('/',function (req,res){
        crud.insert('t1',[{'test1':'test1'},{'test2':'test2'}],function(){
            res.send();
        });
    });

    app.listen(6655);
})();