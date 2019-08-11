        function css(ele,attr,value){
            if(arguments.length == 2){
                return getCss(ele,attr);
            }else{
                if (attr == "opacity") {
                    ele.style[attr] = value;
                    ele.style.filer = "alpha(opacity = "+value*100+")";
                }
                ele.style[attr] = value;
            }
            function getCss(ele,attr){ 
                return ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele,null)[attr];
            }
        }