/************web服务器
 * 
 */
const http=require('http');
const configs=require('./config').configs;
//const fs=require('fs');
const server =http.createServer((req,res)=>{
//    fs.readFile('./test.html','utf-8',function  (err,data) {
//        if (err) {
//             res.setHeader('Content-type','text/plain');           
//             res.statusCode=404;
//             res.end('NOT FIND')
//        }else{
//     }
// })
        res.setHeader('Content-type','text/plain');
        res.statusCode=200;
        res.end('aaa')
})
server.listen(configs.port,configs.ip, ()=>{
    console.log(configs.ip)
})
