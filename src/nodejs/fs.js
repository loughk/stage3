;(function(){
    // 任何文件操作前记得备份,以免损失。
    var fs = require('fs');

    // 覆写
    // var fs = require('fs');
    var overwrite = 'overwrite:';
    fs.writeFile('./files/test_fs.txt',overwrite,function(error){
        if(error){
            return console.error(error);
        };
        console.log('覆写成功');

        // 异步执行读取
        // var fs = require('fs');
        fs.readFile('./files/test_fs.txt',function(error,content){
            if(error){
                return console.error(error);
            }
            console.log('异步读取成功:'+content.toString());
        });
    });

    

    // 拼接
    // var fs = require('fs');
    var writein = 'tested successfully;';
    fs.appendFile('./files/test_fs.txt',writein,function(error){
        if(error){
            return console.error(error);
        };
        console.log('写入成功');

        // 同步执行读取,没有回调函数
        // var fs = require('fs');
        var content = fs.readFileSync('./files/test_fs.txt');
        console.log('同步读取成功:'+content.toString());
    });

    // 读取图片
    var http = require('http');
    // var fs = require('fs');
    var content = fs.readFileSync('./images/test_fs.jpg','binary');
    http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.write(content,'binary');
        console.log('图片读取成功localhost:6655');
        response.end();
    }).listen(6655);
    
})();
