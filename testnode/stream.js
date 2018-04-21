;(function(){
    // 以下调试自行选择注释执行。

    // 这是在fs模块中使用stream

    // 任何文件操作前记得备份,以免损失。
    var fs = require("fs");

    var data1 = '';
    var readerStream1 = fs.createReadStream('./files/test_stream.txt');
    // 在读取前确保流的编码和文件编码一致，否则乱码。
    readerStream1.setEncoding('UTF8');
    console.log('文件可读取。');

    var i = 0;
    readerStream1.on('data', function(chunk) {
        data1 += chunk;
        i++;
        console.log('读取次数:'+i);
    });
    readerStream1.on('end',function(){
        console.log('所有数据读取完成:');
        console.log(data1);
    });
    readerStream1.on('error', function(err){
        console.log(err.stack);
    });


    // var fs = require("fs");
    var data2 = '中国';

    // w模式:覆盖。详情看文档fs文件系统 → fs.createWriteStream(path[, options])
    // 如果读写分离的话,要考虑读写的顺序,具体以后查资料,应该和文档打开方式有关。
    var readerStream2 = fs.createWriteStream('./files/test_stream.txt',{'flags':'w'});
    // 目标文件也会被保存为新的编码类型。
    readerStream2.write(data2,'UTF8');
    console.log('文件可写入。');
    readerStream2.end();

    readerStream2.on('finish', function() {
        console.log("写入完成。");
    });
    readerStream2.on('error', function(err){
        console.log(err.stack);
    });


    // pipe是目前较好的读写文件方式,因为逻辑已经被写好了。建议未深入前用这个。
    // 读写是有时间的，如果代码没写好，高频情况下会出现读写时间差异造成的数据丢失问题。
    // var fs = require("fs");
    var rs3 = fs.createReadStream('./files/test_stream.txt');
    var ws3 = fs.createWriteStream('./files/test_pipe.txt');
    rs3.pipe(ws3);
    console.log('文件读写成功');


    // var fs = require("fs");
    //压缩和解压的模块
    var zlib = require('zlib');

    fs.createReadStream('./files/test_pipe.txt')
        //把读取出来的文本调用压缩模块进行压缩
        .pipe(zlib.createGzip()) 
        //把压缩好的流进行保存
        .pipe(fs.createWriteStream('./zlib/test_zlib.zip'));
    console.log("文件压缩完成。");


    // var fs = require("fs");
    // var zlib = require('zlib');

    fs.createReadStream('./zlib/test_zlib.zip')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('./zlib/test_zlib.txt'));
    console.log("文件解压完成。")
})();