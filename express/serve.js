const express=require('express');
const expressStatic=require('express-static');
const bodyParser = require('body-parser')
let serve=express();
serve.listen(3000);
serve.use(bodyParser.urlencoded({
    extended:false,//是否扩展
    limit:2*1024*1024,//限制大小
}))
serve.use('/login-express',(req,res)=>{
    console.log(req.body)//获取post数据
    res.status(200).end()
})
// serve.get('/reg',(req,res)=>{
    //console.log(req.query)//获取get
// })
serve.use(expressStatic('./www'))