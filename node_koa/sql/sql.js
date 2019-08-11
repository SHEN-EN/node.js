const mysql=require('mysql')
let db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"test_node"
})
let query=(sql,val)=>{
    return new Promise((resolve,reject)=>{
        db.getConnection((err,connection)=>{
            if (err) reject(err)
            else{
                connection.query(sql,val, async(err,data)=>{
                    if (err)reject(err)
                    else{
                        resolve(data) 
                    } 
                    connection.release()  
                })
            }
        })
    })
}
const FindAllOffice=(pageNo,pageSize,value,index)=>{
    if (pageNo==undefined||pageSize==undefined||value==undefined) {
        var sql=`SELECT * FROM tb_recruit`;
    }else if(index){
        let page=pageNo*pageSize
        var sql=`SELECT * FROM tb_recruit WHERE ind='${index}' AND CONCAT(office,type,name,address) LIKE "%${value}%" LIMIT ${page},${pageSize}  `;
    }else{
        let page=pageNo*pageSize
        var sql=`SELECT * FROM tb_recruit WHERE  CONCAT(office,type,name,address) LIKE "%${value}%" LIMIT ${page},${pageSize}  `;
    }
    return query(sql)
}
//查找用户
const SelectReg=(phone)=>{
    let sql=`SELECT * FROM tb_user WHERE username='${phone}'`;
    return query(sql)
}
const Reg=(value)=>{
    let sql='INSERT INTO tb_user(username,password) VALUES (?,?)';
    return query(sql,value)
}
const RegCompany=(value)=>{
    let sql='INSERT INTO tb_company(username,password) VALUES (?,?)';
    return query(sql,value)
}
const SelectLogin=(phone)=>{
    let sql=`SELECT * FROM tb_company WHERE username='${phone}'`;
    return query(sql)
}
const SeachType=(value)=>{
    let sql=`SELECT * FROM tb_type WHERE type='${value}'`;
    return query(sql)
}
const talk=(value)=>{
    let sql=`INSERT INTO tb_talk(name,title,content,creatTime) VALUES (?,?,?,?)`;
    return query(sql,value)
}
const gettalk=(value)=>{
    let sql=`SELECT * FROM tb_talk`;
    return query(sql)
}
module.exports={
    query,
    FindAllOffice,
    SelectReg,
    Reg,
    SeachType,
    RegCompany,
    SelectLogin,
    talk,
    gettalk
}
