const express=require('express');
const expressStatic=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const db=require('./sql/serve_sql.js');
const route=require('express-route')
let serve=express();
const multerObj=multer({//接收文件
    dest:'./upload'
})
serve.listen(8020);
serve.use(cookieParser('fsafdfgg'))//cookie密钥
let arr=[];
for (let i = 0; i < 2000; i++) {
   arr.push('keys_'+Math.random())  
}
serve.use(bodyParser.urlencoded({
    extended:false,//是否扩展
    limit:2*1024*1024,//限制大小
}))
serve.use(cookieSession({//cookie加密
    name:'mqs',
    keys:arr
}))
serve.use(bodyParser.urlencoded({//express解析post数据
    extended:false,
}));
serve.use(multerObj.any())
serve.all('*', function(req, res, next) {//允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
serve.use('/index',require('./route/index.js')())
serve.use(expressStatic('./www/web'));
