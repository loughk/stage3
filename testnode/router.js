;(function(){
    var http = require('http');
    var url = require('url');
    var qs = require('querystring');
    var util = require('util');

    http.createServer(function(rq,rp){
        // 响应头记得转码
        rp.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});

        // 调试:http://localhost:6655/signup?name=aaa&psw=111
        
        // {...}
        var urls = url.parse(rq.url,true);
        // /signup
        var pathname = urls.pathname;
        // {name:'aaa',psw:'111'}
        var params = urls.query;

        var method = rq.method.toUpperCase();

        var result = {};
        if(method == 'POST'){
            var postData = '';
            rq.on('data', function(_data){
                postData += '_data';
            })
            rq.on('end',function(){
                postData = qs.parse(postData);
                switch(pathname){
                    case '/signup':
                        result = {'status': true};
                        break;
                    default :
                        result = {'status': false, 'msg': '没有对应的请求'};
                        break;                  
                }
                // post是异步执行的。
                
                // util.inspect()将任意对象转换为字符串
                rp.end(util.inspect(result));
            })
        } 
        else {
            switch(pathname){
                case '/students':
                    result = {'status': true, 'data': [], params};
                    break;
                default :
                    result = {'status': false, 'msg': '没有对应的请求', params};
                    break;
            }
            rp.end(util.inspect(result));
        }

        

    }).listen(6655);
})();