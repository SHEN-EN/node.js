const router = require('koa-router')();
const mysql=require('../sql/sql')
router.get('/getOffice',async (ctx,next)=>{
  await mysql.FindAllOffice(ctx.query.pageNo,ctx.query.pageSize,ctx.query.office,ctx.query.index).then((result) => {
    console.log(ctx.query)
      ctx.body={
        result
      };
    }).catch((err) => {
        
    });
}).get('/getType',async (cxt,next)=>{
  await mysql.SeachType(cxt.query.index).then((result) => {
    console.log(cxt.query.index)
    cxt.body={
        result
      };
  }).catch((err) => {
    
  });
})
module.exports=router
