function moveTime(obj,json,time,M,callback){
    clearInterval(obj,time);

    switch(typeof time){
        case "number"://第三个实参是时间
            time=time;
            if(typeof M==="string"){//第四个实参是模式
                M=M||"linear";
            }else if(typeof M==="function"){//第四个实参是回调函数，及缺模式M
                callback=M;
                M="linear";
            }else{//缺变化模式 M 和 回调函数
                M="linear";
            };
            break;
        case "string"://第四个实参是 变化模式M
            if(typeof M==="function"){//第四个是回调函数 ，缺时间
                callback=M;
                M=time;
                time=400;
            }else if(typeof M==="number"){//第四个实参是时间，说明时间和模式交换位置了
                var s=time;
                time=M;
                M=s;
            }else{//缺时间time
                M=time;
                time=400;
            };
            break;
        case "function"://缺省 时间time变化模式M ，有回调
            callback=time;
            time=400;
            M="linear";
            break;
        default://缺省 时间time和变化模式M ，不一定有回调
            time=400;
            M="linear";
            break;
    }
    
    var attr = null;
    var initial = {};
    for(var attr in json){  //json={width:300,height:300}
        if(attr == "opacity"){
            initial[attr]=Math.round(css(obj,attr)*100); 
            
        }else{
            initial[attr] = parseFloat(css(obj,attr));
        }
    }
    var t0 = new Date().getTime();

    
    obj.timer =setInterval(function(){
        var t1 = new Date().getTime();
        var _t = t1-t0;
        if(_t>time){
            _t = time;
            clearInterval(obj.timer);
            for(attr in json){
                if(attr == "opacity"){
                    obj.style[attr] = json[attr];
                    obj.style.filter="alpha(opacity="+Math.round(json[attr]*100)+")";
                }else{
                    obj.style[attr] = json[attr]+"px";
                }
            }
            clearInterval(obj.timer);
            callback&&callback.call(obj);
        }else{
            for(attr in json){
                if(attr == "opacity"){
                    // obj.style[attr]=s/100;
                    // obj.style.filter="alpha(opacity="+s+")";
                    var s = Tween[M](_t,initial[attr],Math.round(json[attr]*100)-initial[attr],time);
                    obj.style[attr] = s/100;
                    obj.style.filter="alpha(opacity="+s+")";
                }else{
                    var s = Tween[M](_t,initial[attr],json[attr]-initial[attr],time);
                    obj.style[attr] = s+"px"
                }   
                
                
                // obj.style[attr] = (json[attr]-initial[attr])/time*_t+initial[attr]+"px";
            }
        }
    },13);

}