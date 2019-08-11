/**********Get */
const http=require('http');
const config=require('../config').ip;
const queryString=require('querystring')//解析前端传的数据转换json对象
const url=require('url')
const serve=http.createServer((rep,res)=>{
    let arr=rep.url.split('?')[1]
    //console.log(queryString.parse(arr))
    console.log(url.parse(rep.url,true).query)//true 自动转换json对象
    res.write('aaa')
    //res.setHeader('Content-type','text/html');
    //res.statusCode=200;
    res.end()
})
serve.listen(config.port,config.ip,()=>{
   // console.log(config.port)
})