/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-11-21 14:40:38
 * @version $Id$
 */

 function move(obj,json,callback){   //callback执行时机是在    move执行后执行
    clearInterval(obj.timer);
        var attr=null;
        var target={};
        for(var attr in json){  //json={width:300,height:300}
            if(attr == "opacity"){
                target[attr]=json[attr]; 
            }else{
                target[attr]=parseInt(json[attr]);
            }
        }//target={width:300,height:300}
        obj.timer=setInterval(function(){
        //var start=gStyle(obj,attr);
        var flag=true;  //总开关，标志所有人都到达目的地，只要有一个人没有到，那么false
        for(attr in json){
            var cur=null;
            if(attr == "opacity"){
                cur = css(obj,attr);
                console.log(cur);
                var speed=(target[attr]-cur)*100*.2;
                console.log(speed);
                speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
                obj.style[attr]=(parseInt(cur*100)+speed)/100;
                obj.style.filter="alpha(opacity="+(parseInt(cur*100)+speed)+")";
            }else{
                cur = parseInt(css(obj,attr));
                var speed=(target[attr]-cur)*.2;
                speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
                console.log(speed);
                obj.style[attr]=(cur+speed)+"px";
            }            
            if(cur!=target[attr]){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            callback&&callback.call(obj);
        }
        },13);
    }