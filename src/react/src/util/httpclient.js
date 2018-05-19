// 这里的请求用组件superagent,不是特别要求,只是做练习用。
import superagent from "superagent";

function filterUrl(url){
    var baseUrl = 'http://localhost:6655';
    if(url && url.startsWith('http')){
        return url;
    };
    return baseUrl + url;
};

// opt:{
//     method:GET || POST,
//     url:,
//     set:{"auth":token}
//     send:{"key":"form-data"}
//     superagent默认设置set{"Content-Type":"application/x-www-form-urlencoded"}
//     但post最好还是都手动set。
// }
export default {
    'ajax':function(opt){
        opt.url = opt.url ? filterUrl(opt.url) : null;
        return new Promise((resolve,reject)=>{
            superagent(opt.method || "GET",opt.url)
            .set(opt.set || {"Content-Type":"application/json"})
            .send(opt.send || {})
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            })
        });
    }
};