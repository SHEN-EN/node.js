const router = require('koa-router')();
const mysql=require('../sql/sql')

router.post('/talk', async (cxt,req)=>{
    let date=+new Date()
    await mysql.talk([cxt.request.body.name,cxt.request.body.title,cxt.request.body.content,date]).then((result) => {
         cxt.body={
            "msg":'插入成功',
            "resultCode":"200"
         }
     }).catch((err) => {
         
     });
}).get('/getTalk', async (cxt,req)=>{
    await mysql.gettalk().then((result) => {
        cxt.body={
            result
        }
    }).catch((err) => {
        
    });
})
module.exports=router
