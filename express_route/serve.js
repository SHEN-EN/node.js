const express=require('express');
const request=require('request');
var cheerio = require('cheerio');
let serve=express();
serve.use('/',(req,res)=>{
request('http://cnodejs.org/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // 输出网页内容
    var $=cheerio.load(body);
    $('.HotItem .HotItem-title')
    console.log($.html())
  }
});
})

serve.listen(9000)