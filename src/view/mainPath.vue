<template>
<div class="mainPath">
   <div class="banner">
      <img src="/static/MPimg/mainPath_logo.png">
   </div>
   <div class="MP_menu">
      <span>每日推荐</span><span>您的图书</span><span>每周榜首</span><span>top books</span>
   </div>
   <div class="scrolling">
      <ul class="sc_contain">
          <!-- <li class="sc_box">
            <img src="/static/MPimg/B01.jpg">
            <div class="scroll_bt">
               <p class="scbox_top">图书推荐</p>
            </div>
         </li> -->
      </ul>
      <div class="sc_buleft"><span class="iconfont bookarrow-left-bold lbt" ></span></div>
      <div class="sc_buright"><span class="iconfont bookarrow-right-bold lbt2" ></span></div>
   </div>
   <div class="MP_intro">
      <img src="/static/MPimg/pic01.png">
      <div class="MP_introtext">
         <p class="title">您的专属图书推荐</p>
         <p class="text">为您打造的专属图书推荐平台，我们将根据您的爱好与学习倾向来为您推荐优秀的图书bulabula意思意思反正是demo后面再编</p>
      </div>
   </div>
   <div class="weeklybook">
      <div class="weeklyspan"><p>weekly 每 周 图 书 推 荐</p></div>
      <div class="weeklyspan2"><p class="iconfont bookcategory"></p></div>
      <div class="weeklybooks">
         <div class="weeklybox1">
            <img :src=this.weeklybooks[0].img>
            <p class="weeklyspan3 iconfont bookoffice"> 1</p>
            <p class="weektitle">{{this.weeklybooks[0].text}}</p>
            <p class="weekintro">{{this.weeklybooks[0].intro}}</p>
         </div>
         <div class="weeklybox2">
            <img :src=this.weeklybooks[1].img>
            <p class="weeklyspan3 iconfont bookoffice"> 2</p>
            <p class="weektitle">{{this.weeklybooks[1].text}}</p>
            <p class="weekintro">{{this.weeklybooks[1].intro}}</p>
         </div>
         <div class="weeklybox3">
            <img :src=this.weeklybooks[2].img>
            <p class="weeklyspan3 iconfont bookoffice"> 3</p>
            <p class="weektitle">{{this.weeklybooks[2].text}}</p>
            <p class="weekintro">{{this.weeklybooks[2].intro}}</p>
         </div>
         <div class="weeklybox4">
            <img :src=this.weeklybooks[3].img>
            <p class="weeklyspan3 iconfont bookoffice"> 4</p>
            <p class="weektitle">{{this.weeklybooks[3].text}}</p>
            <p class="weekintro">{{this.weeklybooks[3].intro}}</p>
         </div>
         <div class="weeklybox5">
            <img :src=this.weeklybooks[4].img>
            <p class="weeklyspan3 iconfont bookoffice"> 5</p>
            <p class="weektitle">{{this.weeklybooks[4].text}}</p>
            <p class="weekintro">{{this.weeklybooks[4].intro}}</p>
         </div>
      </div>
   </div>
   <div class="tops">
      <div class="toptitle">
         <p>Top Books</p>
      </div>
      <div class="top1">
         <p class="topbg">{{this.tops[0].type}}</p>
         <img class="imgg" :src=this.tops[0].img>
         <p class="toptext">{{this.tops[0].text}}</p>
         <div class="tops_intro">{{this.tops[0].intro}}</div>
      </div>
      <div class="top2">
         <p class="topbg">{{this.tops[1].type}}</p>
         <img class="imgg" :src=this.tops[1].img>
         <p class="toptext">{{this.tops[1].text}}</p>
         <div class="tops_intro">{{this.tops[1].intro}}</div>
      </div>
      <div class="top3">
         <p class="topbg">{{this.tops[2].type}}</p>
         <img  class="imgg" :src=this.tops[2].img>
         <p class="toptext">{{this.tops[2].text}}</p>
         <div class="tops_intro">{{this.tops[2].intro}}</div>
      </div>
   </div>
</div>
</template>
<script>
import{scrollShow,startScroll}from'../../static/js/mainPath.js'
import{getmainPath}from'../url.js'
export default {
  data(){
      return{
         mainPath:[],
         scrollbox:[],//记录轮播图数据
         weeklybooks:[{},{},{},{},{}],
         tops:[{},{},{}]
      }
   },
   methods:{
      getData(){//渲染首页的数据
         getmainPath().then(res=>{
            this.scrollbox=res.data.scrollbox;
            this.weeklybooks=res.data.weeklybooks;
            this.tops=res.data.tops;
            //渲染box数据
            this.getscrolldata();
         })
      },
      getscrolldata(){
         var length =this.scrollbox.length;
	      var ulbox=$('.sc_contain')[0];
	      for(var i=1;i<=length;i++){
            var ulli=document.createElement('li');
            ulli.className='sc_box';
	   	   var text='<img src='+this.scrollbox[i-1].img+'>'//添加img链接
            text+='<div class="scroll_bt"><p class="scbox_top">今日推荐</p>'//添加p标签	         	
            text+='<p class="scbox_text">'+this.scrollbox[i-1].text+'</p>'
		      text+='<p class="scbox_intro">'+this.scrollbox[i-1].intro+'</p></div>'
	         ulli.innerHTML+=text;
		      ulbox.appendChild(ulli);
         }
         for(var i=1;i<=5;i++){
            var ulli=document.createElement('li');
            ulli.className='sc_box';
	   	   var text='<img src='+this.scrollbox[i-1].img+'>'//添加img链接
	         text+='<div class="scroll_bt"><p class="scbox_top">今日推荐</p>'//添加p标签
      	   text+='<p class="scbox_text">'+this.scrollbox[i-1].text+'</p>'
		      text+='<p class="scbox_intro">'+this.scrollbox[i-1].intro+'</p></div>'
	         ulli.innerHTML+=text;
		      ulbox.appendChild(ulli);
   	   }
      }
   }, 
   mounted(){
      this.getData()//加载时渲染数据
      startScroll();
      scrollShow();
   },
   destroyed: function () {//离开路由的时候停止轮播
    clearInterval(this.ds)   
   }
}
</script>
<style lang="scss" src='../../static/css/mainPath.css'>
</style>
