/**
 *
 * @authors Your Name (you@example.org)
 * @date    2019-03-19 10:13:41
 * @version $Id$
 */

var nav = [
   {
        "type" : "initial",
        "menu" : [
            {
                "text" : "首页",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "找工作",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "校园招聘",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            }
        ]
    },
    {
        "type" : "personal",
        "menu" : [
            {
                "text" : "首页",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "我的易工作",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "找工作",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "我的投递",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "我的收藏",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "个人简历",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "校园招聘",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            }
        ]
    },
    {
        "type" : "enterprise",
        "menu" : [
            {
                "text" : "首页",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "企业中心",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "发布职位",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "搜索简历",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "职位管理",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "简历管理",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "企业信息",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            },
            {
                "text" : "校园招聘",
                "href" : "b.html?school=深圳技师学院&kk=asd"
            }
        ]
    }
]

var userList = [
    {
        type:"initial",
        useName:"",
        userPsd:"",
        userPhoto:""
    },
    {
        type:"personal",
        useName:"u1",
        userPsd:"123456",
        userPhoto:"myperson.png"
    },
    {
        type:"personal",
        useName:"u2",
        userPsd:"123456",
        userPhoto:"myperson1.png"
    },
    {
        type:"personal",
        useName:"u3",
        userPsd:"123456",
        userPhoto:"myperson2.png"
    },
    {
        type:"enterprise",
        useName:"u4",
        userPsd:"123456",
        userPhoto:"myperson3.png"
    },
    {
        type:"enterprise",
        useName:"u5",
        userPsd:"123456",
        userPhoto:"myperson4.png"
    }
];


var navlist = document.getElementById('navlist');                   //导航列表
var loginBlock = document.getElementById("login");                  //登录块
var unloginBlock = document.getElementById("unlogin");              //未登录块
var headUesrName = document.getElementById("headUesrName");         //导航栏用户名

var loginContainer = document.getElementById("loginContainer");
var userContainer = document.getElementById("userContainer");
var personalLogin = document.getElementById("personalLogin");
var corporateLogin = document.getElementById("corporateLogin");
var personContent = document.getElementById("personContent");
var companyContent = document.getElementById("companyContent");
var mainUserName = document.getElementById("mainUserName");
var loginId = document.getElementById("personId");
var loginPwd = document.getElementById("personPwd");

var personEnter = document.getElementById("personEnter");
var companyEnter = document.getElementById("companyEnter");
var loginout = document.getElementById("loginout");

//轮播
var bannerContent = document.getElementById("bannerContent");
var bannerList = document.getElementById("bannerList");
var bannerBtnL = document.getElementById("bannerBtnL");
var bannerBtnR = document.getElementById("bannerBtnR");
var imgdom = bannerList.getElementsByTagName("li");
var points=document.getElementById('points').getElementsByTagName('span')

var statistics = document.getElementById("Statistics");
var oList = statistics.getElementsByTagName("li");

var time0 = new Date();
var h0 = time0.getHours();
var m0 = time0.getMinutes();
var s0 = time0.getSeconds();
var str0 = zero(h0) + zero(m0) + zero(s0);


var menu;
var type = "initial";
var listType = "personal";
var imglen = imgdom.length;
var bannerW = bannerContent.clientWidth;
var imgNumber = 0;
var imgIndex = 0;
var st = new Date();
var playKey = true;
var autoTimer = setInterval(play,2000);



//遍历轮播区，渲染初始时间
for(var i = 0; i < oList.length; i++){
    var imgs = oList[i].getElementsByTagName("img");
    imgs[0].index = str0.charAt(i);
    imgs[0].src = "images/Statistics/" + str0.charAt(i) +".png";
        playStatistics(oList[i],i);
}


//个人登录块
personalLogin.onclick=function(){
    personContent.style.display="block";
    companyContent.style.display="none";
    personalLogin.firstChild.style.color="#0aa5f5";
    corporateLogin.firstChild.style.color="#a5a5a5";
    personalLogin.style.borderBottom="1px solid #0aa5f5";
    corporateLogin.style.borderBottom="1px solid #a5a5a5";
    listType="personal";
    loginId=document.getElementById("personId");
    loginPwd=document.getElementById("personPwd");
}

//企业登录块
corporateLogin.onclick=function(){
    personContent.style.display="none";
    companyContent.style.display="block";
    personalLogin.firstChild.style.color="#a5a5a5";
    corporateLogin.firstChild.style.color="#0aa5f5";
    personalLogin.style.borderBottom="1px solid #a5a5a5";
    corporateLogin.style.borderBottom="1px solid #0aa5f5";
    listType="enterprise";
    loginId=document.getElementById("companyId");
    loginPwd=document.getElementById("companyPwd");
}

//个人用户登录
personEnter.onclick=function(){
    if(sureUser()){
        sureUser();
        loginBlock.style.display = "block";
        unloginBlock.style.display = "none";
        headUesrName.textContent = sureUser();
        loginContainer.style.display = "none";
        userContainer.style.display = "block";
        mainUserName.textContent = sureUser();
    }else{
        alert("输入用户名或密码不正确！")
    }
}

//企业用户登录
companyEnter.onclick=function(){
    if(sureUser()){
        sureUser();
        loginBlock.style.display = "none";
        unloginBlock.style.display = "block";
        headUesrName.textContent = sureUser();
        loginContainer.style.display = "none";
        userContainer.style.display = "block";
        mainUserName.textContent = sureUser();
    }else{
        alert("输入用户名或密码不正确！")
    }
}

//退出登录
loginout.onclick = function(){
    type = "initial";
    menu=sureMenu();
    fill(menu);
    loginContainer.style.display = "block";
    userContainer.style.display = "none";
    loginBlock.style.display = "none";
    unloginBlock.style.display = "block";
    loginId.value = "";
    loginPwd.value = "";
}

//轮播左按钮
bannerBtnL.onclick = function(){
	var endt=new Date();
	if(endt-st>410){
		imgNumber--;
		if(imgNumber <= -1){
			imgdom[imglen-1].style.position = "relative";
			imgdom[imglen-1].style.left = -imglen*bannerW+"px";
			moveTime(bannerList,{"left": -bannerW*imgNumber},function(){
				imgdom[imglen-1].style.position = "static";
				bannerList.style.left = -(imglen-1)*bannerW+"px";
				imgNumber = imglen-1;
			});
			imgIndex = points.length-1;
			pointshow(imgIndex); 
		}else{
			moveTime(bannerList,{"left": -bannerW*imgNumber});
			imgIndex -= 1;
			pointshow(imgIndex); 
		}
		st=new Date();
	}
}

//轮播右按钮
bannerBtnR.onclick = function(){
	var endt=new Date();
	if(endt-st>410){
		imgNumber++;
		if(imgNumber >= imglen){
			imgdom[0].style.position = "relative";
			imgdom[0].style.left = imglen*bannerW+"px";
			moveTime(bannerList,{"left": -bannerW*imgNumber},function(){
				imgdom[0].style.position = "static";
				bannerList.style.left = 0+"px";
				imgNumber = 0;
			});
			imgIndex = 0;
			pointshow(imgIndex);
		}else{
			moveTime(bannerList,{"left": -bannerW*imgNumber});
			imgIndex += 1;
			pointshow(imgIndex);
		}
	st=new Date();
	}
}

bannerContent.onmouseover = function(){
    playKey = false;
    bannerBtnL.style.display = "block";
    bannerBtnR.style.display = "block";
}


bannerContent.onmouseout = function(){
    playKey = true;
        bannerBtnL.style.display = "none";
        bannerBtnR.style.display = "none";
    
}


//用户登录，先匹配类别，再判断账号密码
function sureUser(){
    for(var i=0;i<userList.length;i++){
        console.log(listType)
        if(listType==userList[i].type){//用户类型匹配上了再谈用户名密码匹配
            var userName=loginId.value;
            var userPsd=loginPwd.value;
            if(userName === userList[i].useName && userPsd === userList[i].userPsd){
                type = userList[i].type;
                menu=sureMenu();
                fill(menu);
                console.log("success!");
                return userName;
            }else{
               return false;
            }
        }
    }
    if(i==userList.length) {console.log("failed!");}
}

//通过类别获取导航信息列表
function sureMenu(){
    for(var i=0;i<nav.length;i++){
        console.log(type)
        if(type==nav[i].type){
            return nav[i].menu;
        }
    }
}

//动态渲染导航列表
function fill(menu){
    var still="";
    for(var i=0;i<menu.length;i++){
        still+="<li><a href="+menu[i].href+">"+menu[i].text+"</a></li>"
    }
    console.log(still)
    navlist.innerHTML=still;
}

//移动轮播图原点实现图片切换
function movePoint(){
	for(var j=0;j<points.length;j++){
		points[j].imgIndex = j;
		points[j].onclick = function(){
			imgIndex = this.imgIndex;
			console.log(imgIndex)
			moveTime(bannerList,{"left":-imgIndex*bannerW});
			pointshow(imgIndex);
		}
	}
}

//启动自动轮播定时器
function play(){
    if(playKey){
        imgNumber++;
        if(imgNumber >= imglen || imgIndex >= (points.length-1)){
            imgdom[0].style.position = "relative";
            imgdom[0].style.left = imglen*bannerW+"px";
            moveTime(bannerList,{"left": -bannerW*imgNumber},function(){
                imgdom[0].style.position = "static";
                bannerList.style.left = 0+"px";
                imgNumber = 0;
            });
            imgIndex = 0;
            pointshow(imgIndex);
        }else{
            moveTime(bannerList,{"left": -bannerW*imgNumber});
            imgIndex += 1;
            pointshow(imgIndex);
        }
    }
}

//停止自动轮播定时器
function stop(){
    clearInterval(timer);
}

//原点绑定图片索引
function pointshow(index){
	for (var i=0;i<points.length;i++) {
		if (points[i].className == "on"){
			points[i].className = "";
		}
	}
			//数组从0开始，故index需要-1
	points[index].className = "on";
}

//在线职位统计
function playStatistics(oli,i){
    var num=0;//可见区图片的索引
    setInterval(function(){
        var time1=new Date();
        var hours1=time1.getHours();
        var minutes1=time1.getMinutes();
        var seconds1=time1.getSeconds();
        var str1=zero(hours1)+zero(minutes1)+zero(seconds1);
        var imgs=oli.getElementsByTagName("img");
        if(str1.charAt(i)!=imgs[num].index){
            //1. 等待区的i位置的图片换成str1对于位置的数字图片，同步定义属性index保存当前时间数字
            //2. 可见区图片往上走   可以和第一步交换
            //3. 等待区的图片上去，完全到达可见区之后，将第二步中上去图片拉回等待区
            moveTime(imgs[num],{top:-61},400);
            if(num==0){
                imgs[1].index=str1.charAt(i);
                imgs[1].src="images/Statistics/"+str1.charAt(i)+".png";
                moveTime(imgs[1],{top:0},400,function(){
                    imgs[num].style.top="61px";
                    num=1;
                });
            }else{
                if(num==1){
                    imgs[0].index=str1.charAt(i);
                    imgs[0].src="images/Statistics/"+str1.charAt(i)+".png";
                    moveTime(imgs[0],{top:0},400,function(){
                        imgs[num].style.top="61px";
                        num=0;
                    });
                }
            }
        }
    },1000);
}

//转换时间戳
function zero(num){
    return num >=10 ? ""+num : "0"+num;
}


window.onload =function(){
    menu=sureMenu();
    fill(menu);
    movePoint();
    get()
}
function get() {
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:8020/index/reg",
        data: {
            'phone':'aaa',
            'password':'bbb'
        },
        dataType: "JSON",
        success: function (res) {
           for (let i = 0; i < JSON.parse(res.list[0].Banner).length; i++) {
            var params= 
                `<li><a href=''><img src=${JSON.parse(res.list[0].Banner)[i].url} ></a></li>`
                 
               $('#right').append(params);
           }    
        }
    });
}