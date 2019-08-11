var redis=require('redis');
var  client=redis.createClient(6379,'localhost');
client.set('aaa',{a:'1'})
client.get('aaa',function(err,v){
    console.log(v)
})