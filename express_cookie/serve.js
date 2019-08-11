
const express=require('express');
const cookieParse=require('cookie-parser')
const cookieSession=require('cookie-session')
let serve=express();
serve.use(cookieParse())
serve.use(cookieSession(
    {
        keys:['aaa','sss']
    }
));
serve.use('/',(req,res)=>{
    res.cookie('blus','aaa');//添加签名
    console.log(req.session)
    res.json(200,'{"a":"b"}')
})
serve.listen(5000)