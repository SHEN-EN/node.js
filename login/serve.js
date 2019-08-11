const http=require('http');
const url=require('url');
const queryString=require('querystring');
const fs=require('fs');
var user={}
http.createServer((req,res)=>{
    let str='';//接收post数据
    req.on('data',(data)=>{
        str+=data;

    })
    req.on('end',()=>{
        const urlName=url.parse(req.url,true).pathname;
        const GET=url.parse(req.url,true).query//get参数
        const POST=queryString.parse(str)//post参数
        if (urlName=='/user') {//请求接口
            if (GET.reg=='true') {
               if (user[GET.user]) {
                    res.write('{"resultCode":400,"msg":"用户名已存在"}')                   
               }else{
                    user[GET.user]=GET.pas;
                    res.write('{"resultCode":200,"msg":"注册成功"}')                   
               }0
            }else if(POST.reg=='false'){
                if (user[POST.user]==null) {
                    res.write('{"resultCode":400,"msg":"用户名不存在"}')                                       
                }else if(user[POST.user]!=POST.pas){
                    res.write('{"resultCode":300,"msg":"用户名或密码错误"}')                                       
                }else{
                    res.write('{"resultCode":200,"msg":"登陆成功"}')                                       
                }
            }else{
                res.write('{"resultCode":500,"msg":"接口错误"}')
            }
            res.end()
        }else{
            //读文件
            var fileName='./www'+req.url;
            fs.readFile(fileName,(err,data)=>{
                console.log(fileName)
                if (err) {
                    res.write('404')  
                }else{
                    res.write(data)  
                }
            })
        }
    });
}).listen(5000)