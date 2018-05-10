;(function(){
    var events = require('events');
    var eventEmitter = new events.EventEmitter();

    eventEmitter.on('connect',function(){
        // 因为顺序执行，如果不成功就不会继续执行后面的代码。
        console.log('连接成功');
        eventEmitter.emit('received');
    });

    eventEmitter.on('received',function(){
        console.log('数据接收成功');
    });

    eventEmitter.emit('connect');
    console.log('程序执行完毕');
})();