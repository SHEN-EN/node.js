/************web服务器
 * 
 */
const http=require('http');
const config=require('./config').config;
const fs=require('fs');
var template=fs.readFileSync('./test.ejs','utf-8')
const server =http.createServer((req,res)=>{
    let fileName='./www'+req.url;
    fs.readFile(fileName,(err,data)=>{
        if (err) {
            res.write('NOT find');
        }else{
            res.write(data);
        }
        res.end()
    })
    res.setHeader('Content-type','text/html');
    res.statusCode=200;
   
})
server.listen(config.port,config.ip, ()=>{
    console.log(config.ip)
})
