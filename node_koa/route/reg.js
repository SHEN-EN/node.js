const router = require('koa-router')();
const mysql=require('../sql/sql')
router.post('/reg', async (ctx,req)=>{
    let query=  await  mysql.SelectReg(ctx.request.body.phone)
            if (query.length>0) {
                ctx.body={
                    resultCode:'406',
                    msg:'用户已被注册'
                }
            }else{
    await  mysql.Reg([ctx.request.body.phone,ctx.request.body.password]).then((result) => {
                    ctx.body={
                        resultCode:'200',
                        msg:'注册成功'
                    }
                }).catch((err) => {
                    
                });
            }
})
module.exports=router