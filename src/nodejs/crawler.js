;(function(){
    const fs = require('fs');

    // 第三方模块:request 简化http请求。
    const request = require('request');
    // 第三方模块:cheerio 获取页面内容,语法类似jQuery。
    const cheerio = require('cheerio');

    request('http://www.lanrentuku.com/', function(error,response,body){
        var $ = cheerio.load(body);
        $('img').each(function(i, e){
            var src = $(e).attr('src');
            var name = src.substr(src.lastIndexOf('/') + 1);

            // 查看文档 www.npmjs.com && nodejs.cn
            request(src).on('error', function(err) {
                console.log(err)
            })
            .pipe(fs.createWriteStream('./files/test_crawler.txt');
            // 以上输出只是做个测试。
        })
    })

})();