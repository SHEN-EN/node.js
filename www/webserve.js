const http=require('http');
http.createServer((rep,res)=>{
    console.log(rep.url)
    res.write('aaa')
    res.setHeader('Content-type','text/html');
    res.statusCode=200;
}).listen(5000)