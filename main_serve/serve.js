const http=require('http');
const fs=require('fs');
const queryString=require('querystring');
const url=require('url');
http.createServer((req,res)=>{
    let www='./www'+url.parse(req.url,true).pathname//路径
    fs.readFile(www,(err,data)=>{
        if (err) {
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
    
}).listen(8000)