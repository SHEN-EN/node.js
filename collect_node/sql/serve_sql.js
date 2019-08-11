const mysql=require('mysql');
module.exports=()=>{
    const db=mysql.createPool({
        host:'localhost',
        user:'root',
        password:'123456',
        database:"test_node"
    });//新建连接
    return db;
}