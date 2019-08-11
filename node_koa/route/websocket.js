
let websocket=require('nodejs-websocket');//引入websocket模块
let first='',second='';
let serve=websocket.createServer((ctx)=>{
    ctx.on('text',(str)=>{//获取客户端的数据
        broadcast(JSON.stringify(str))
    })
    ctx.on("close", function (code, reason) {//关闭连接的时候回调
        console.log("关闭连接")
    });
    ctx.on('error',(msg)=>{
        console.log();    
    })
}).listen(8001)
console.log("WebSocket建立完毕")
function broadcast(str){
    serve.connections.forEach(function(connection){
        connection.sendText(str);
    })
}