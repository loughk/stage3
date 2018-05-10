;(function(){
    // 调试：普通模式node url.js;REPL require('url.js');
    // cmd普通模式下"\node 文件A":就是以node环境运行文件A;
    // REPL模式就是在当前文件夹位置运行nodejs,用nodejs语言写代码。引入文件A的写法是:"require('url')";

    // 路径中当前目录需要用./标识才能正常运行。
    var module1 = require('./modulejs/test_module1.js');
    console.log(module1.unitModuleA);
    console.dir(module1.objB);

    console.log(module1.unitModuleC());
    console.dir(module1.arrD);

})();
