;(function(){
    var http = require('http');
    var url = require('url');

    http.createServer(function(req, res){
        // 设置响应头的状态码。
        // 设置响应头的字符码,否则可能乱码
        res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});
     
        // true转成对象,false转成字符串。
        var params = url.parse(req.url, true).query;
        // 写多个内容。
        res.write("key1：" + params.key1);
        res.write("\n");
        res.write("key2：" + params.key2);
        res.end();
     

        // 获取url内容:console.log(req.url);
        // 调试：node server → browser → http://localhost:6655/?key1=value1&key2=value2

    }).listen(6655);
    
})();