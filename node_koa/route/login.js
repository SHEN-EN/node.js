const router = require('koa-router')();
const mysql=require('../sql/sql')
router.get('/login', async (ctx,req)=>{
    let query=await mysql.SelectReg((ctx.query.phone));
    if (query.length==0) {
        ctx.body={
            resultCode:'406',
            msg:'暂无此用户'
        }
    }else{
        console.log(ctx.query.password +'-'+query[0].password)
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