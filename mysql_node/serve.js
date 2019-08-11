const mysql=require('mysql');
//连接createConnection('那台服务器'，用户名，密码,库)
let db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"test_node"
});
//查询
db.query('SELECT * FROM `tb_user`;',(err,data)=>{
    if (err) {
        console.log('查询错误 ')
    }else{
        console.log(data)
    }
});
