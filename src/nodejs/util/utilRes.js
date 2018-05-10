// 统一返回数据的规范：
// status : boolean,
// data : object,
// message : string
module.exports = function(status,data,msg){
    return {
        'status':status,
        'data':data,
        'msg':msg
    };
};