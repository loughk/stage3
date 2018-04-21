;(function(){
    var express = require('express');
    var app = express();

    var path = require('path');

    app.use(express.static(path.join(__dirname, '/')));
    
    // 第三方模块multer:用于post上传文件。
    // 表单数据类型multipart/form-data，不需要设置转字符码或转数据类型。
    var multer = require ('multer');

    // 默认型定义上传路径
    var upload = multer({dest:path.join(__dirname,'/temp')});  



    // var fs = require('fs');
    // // 定制型存储
    // var storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         var _path = path.join(__dirname, "/temp");
    //         if(!fs.existsSync(_path)){
    //             fs.mkdirSync(_path);
    //         }
    //         cb(null, _path);
    //     },
    //     filename: function (req, file, cb) {
    //         // 最好将保存文件名设置为 字段名+时间戳,比如 logo-1478521468943。fs.rename();
    //         cb(null, file.originalname);  
    //     }
    // });

    // // // 通过 storage 选项来对 上传行为 进行定制化
    // var upload = multer({ storage: storage })


    // 单文件上传
    app.post('/upload', upload.single('filename'), function (req, res, next) {  
        // console.log(req.file);  
        // console.log(req.body);
        // res.end("ok"); 
        res.end("文件正在传输"); 
    }); 

    // 多文件上传
    // app.post('/mulUpload', upload.array('photos', 12), function (req, res, next) { 
    //     res.end("文件正在传输");  
    // }) 

    app.listen(6655);
})();