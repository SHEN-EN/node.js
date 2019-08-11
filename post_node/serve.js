const http=require('../config').http
const config= require('../config').ip
const quertString=require('querystring')
http.createServer((req,res)=>{
    let str=''
    req.on('data',(resultData)=>{//分段请求
        str+=resultData;
    });
    req.on('end',()=>{//请求完成
       // console.log(str)
        console.log(quertString.parse(str))
    })
}).listen(config.port)