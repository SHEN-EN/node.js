const router = require('koa-router')();
const mysql=require('../sql/sql')
router.post('/reg/company', async (ctx,req)=>{
    let query=  await  mysql.SelectLogin(ctx.request.body.phone)
            if (query.length>0) {
                ctx.body={
                    resultCode:'406',
                    msg:'用户已被注册'
                }
            }else{
    await  mysql.RegCompany([ctx.request.body.phone,ctx.request.body.password]).then((result) => {
                    ctx.body={
                        resultCode:'200',
                        msg:'注册成功'
                    }
                }).catch((err) => {
                    ctx.body={
                        err
                    }
                });
            }
}).get('/login/company',async (ctx,req)=>{
    let query=await mysql.SelectLogin((ctx.query.phone));
    console.log(query.length)
    if (query.length==0) {
        ctx.body={
            resultCode:'406',
            msg:'暂无此用户'
        }
    }else{
        if (query[0].password==ctx.query.password) {
            ctx.body={
                resultCode:'200',
                msg:'登陆成功'
            }
        }else{
            ctx.body={
                resultCode:'400',
                msg:'账号或密码错误'
            }
        }
        
    }
})
module.exports=router