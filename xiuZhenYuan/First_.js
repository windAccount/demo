//任务一&九宫格JS源码
var start=document.getElementsByClassName('start')[0],//获取方格、按钮元素对象
    stop=document.getElementsByClassName('stop')[0],
    li_list=document.getElementsByTagName('li');
start.onclick=function(){  //绑定开始事件
    flicker('start');
}
stop.onclick=function(){  //绑定结束事件
    flicker('stop');
}

var Stimer=null;
function flicker(change){
    //每次点击，清除上一次定时器；
    clearInterval(Stimer);    
    //设置可用背景色库
    var bgColor=['red','yellow','blue','black','white','pink','purple','hotpink','Crimson'];        
    if(change=='start'){    //通过传参判断开始事件，执行随机变色                    
        Stimer=setInterval(function(){
            var i=parseInt(Math.random()*9), //设置三组不相同的随机数0-8；
                j=parseInt(Math.random()*9),
                k=parseInt(Math.random()*9);
            if( i!=j && j!=k && i!=k){  //排除相同随机数  
                console.log(i,k,j);   //查看信息  
                for(var n=0;n<li_list.length;n++){  //每秒for循环还原所有背景色。
                    li_list[n].style.backgroundColor=null;           
                }          
                li_list[i].style.backgroundColor=bgColor[i]; //每秒添加随机背景色。
                li_list[j].style.backgroundColor=bgColor[j]; 
                li_list[k].style.backgroundColor=bgColor[k]; 

            }       
        },1000);
    }else{  //非开始 事件，执行色彩复原；         
        for(var n=0;n<li_list.length;n++){  //通过for循环清除所有背景色。
            li_list[n].style.backgroundColor=null;           
        }
    }
}
