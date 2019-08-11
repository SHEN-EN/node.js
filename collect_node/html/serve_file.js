const express=require('express');
let serve=express();
let routeUser=express.Router();
routeUser.get('/a.html',(req,res)=>{
    res.send('aaaa')
})
serve.use('/user',routeUser)//arg[0]：路由路径，arg[1]:路由名字
serve.listen(9000);