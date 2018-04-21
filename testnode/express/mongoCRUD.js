var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

// mongoClient.connect会一直保持连接，所以不能重复打开。
// 因为node单线程，一直要用的连接保持就行了，不需要关闭，其中的问题由node内置代码解决吧。
// 
// mongodb的连接库或插入数据:没就新建。具体看情况。
var objCRUD = {
    'DB':{},
    'objDB':{
        // dbName
        // // url
    },
    'connect':function(dbName,url){
        var that = this;
        url = url || 'mongodb://localhost:27017/';
        mongoClient.connect(url, function(err, database) {
            if(err) throw err;
            that.objDB = database.db(dbName || 'test');
            that.DB = database;
        });
    },
    'insert':function(colName, data, cb){
        // 插入后返回的对象增加了属性_id,但无法直接读取,数据类型是Object_id
        this.objDB.collection(colName).insert(data,function(err,res){
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'select':function(colName, terms, cb){
        // 返回的是数组,js空数组是true
        this.objDB.collection(colName).find(terms || {}).toArray(function(err, res){
            if (err) throw err;
            if(cb){cb(res)};
        });
    },
    'updateOne':function(colName,tremsOld,tremsNew,cb){
        this.objDB.collection(colName).updateOne(tremsOld, tremsNew, function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'updateMany':function(colName,tremsOld,tremsNew,cb){
        this.objDB.collection(colName).updateMany(tremsOld, tremsNew, function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'deleteOne':function(colName,trems,cb){
        this.objDB.collection(colName).deleteOne(trems,function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'deleteMany':function(colName,trems,cb){
        this.objDB.collection(colName).deleteMany(trems,function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'close':function(){
        // 如有必要关闭数据库的连接:
        if(!this.DB){
            this.connect('test');
        }
        this.DB.close();
    }
}
   
module.exports = objCRUD;
