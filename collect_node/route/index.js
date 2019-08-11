const express=require('express');
const db=require('../sql/serve_sql.js')
module.exports=()=>{
    let router=express.Router();
    router.get('/login',(req,res,next)=>{
        //查询
        console.log(req.query.phone)
        let sqlSelect='SELECT * FROM tb_user WHERE username = ? ';
        db().query(sqlSelect,req.query.phone,(err,data)=>{
            if (err) {
                res.send({
                    "resultCode":"500",
                    "resultMessage":"参数错误"
                }).status(200).end()
            }else{
                if (req.query.phone==undefined||req.query.password==undefined) {
                    res.send(JSON.stringify({
                        "resultCode":"500",
                        "resultMessage":"缺少参数"
                    })).end()
                }else{
                    if (data.length==0) {
                        res.send(JSON.stringify({
                            "resultCode":"400",
                            "resultMessage":"无此用户"
                        })).end()
                    }else if(data[0].password!=req.query.password){
                        res.send(JSON.stringify({
                            "resultCode":"406",
                            "resultMessage":"请检查你的手机号或密码"
                        })).status(200).end() 
                    }else{
                        res.send(JSON.stringify({
                            "resultCode":"200",
                            "resultMessage":"登陆成功"
                        })).status(200).end()
                    }
                }
            }
        });
    });
    router.get('/banner',(req,res)=>{
        let sqlSelect='SELECT * FROM tb_banner';
        db().query(sqlSelect,(err,data)=>{
            if (err) {
                res.send(JSON.stringify({
                    "resultCode":"500",
                    "resultMessage":"数据库查询错误"
                })).status(500).end()
            }else{
                res.send(JSON.stringify({
                    "resultCode":"200",
                    "resultMessage":"true",
                    "list":data
                })).status(200).end()
            }
        })
    })
    router.post('/reg',(req,res,next)=>{//注册
        //查询
        let sqlInsert="INSERT INTO tb_user(username,password) VALUES (?,?)"
        let params=[req.body.phone,req.body.password]
            db().query(`SELECT * FROM tb_user WHERE username ='${req.query.phone}'`,(err,data)=>{
                if (err) {
                    res.send({
                        "resultCode":"500",
                        "resultMessage":"参数错误"
                    }).status(500).end()    
                }else{
                    if (data.length!=0) {
                        res.send({
                            "resultCode":"400",
                            "resultMessage":"此账户已被注册"
                        }).status(200).end()    
                    }else{
                        db.query(sqlInsert,params,(err)=>{
                            if (err) {
                                console.log('数据库出错')
                            }else{
                                res.send({
                                    "resultCode":"200",
                                    "resultMessage":"注册成功"
                                }).status(200).end()   
                            }
                        })
                    }
                }
            })
    })
    return router;
}