//控制轮播图
var startScroll=()=>{
    var scrollDiv = document.getElementsByClassName("sc_contain")[0];	
	  // 定义初始值
	  var left =-3600;
	  // 定义一个定时器 走一步
		this.ds = setInterval(()=>{	
		  var timer = setInterval(()=>{
			  left --;
			  if (left <= -3600) {
			   left = 0;
			  }
			  if (left % 450 == 0) {
				  clearInterval(timer);
				  timer = null;
			  }
			  scrollDiv.style.marginLeft = left + "px";
		  },0.01);		
	  },5000);
	  //监听切换页面的时候的轮播
      window.onfocus =()=> {
		this.ds = setInterval(()=>{		
		  var timer = setInterval(()=>{
			  left --;
			  if (left <= -3600) {
			   left = 0;
			  }
			  if (left % 450 == 0) {
				  clearInterval(timer);
				  timer = null;
			  }
			  scrollDiv.style.marginLeft = left + "px";
		  },0.01);		
	  },5000);
	  }
	  //监听鼠标进入
	  document.getElementsByClassName("scrolling")[0].onmouseenter = ()=>{
		  clearInterval(this.ds)
	  }
	  //监听鼠标离开
	  document.getElementsByClassName("scrolling")[0].onmouseleave = ()=>{
		this.ds = setInterval(()=>{	
			var timer = setInterval(()=>{
				left --;
				if (left <= -3600) {
				 left = 0;
				}
				if (left % 450 == 0) {
					clearInterval(timer);
					timer = null;
				}
				scrollDiv.style.marginLeft = left + "px";
			},0.01);		
		},5000);
	}
	  //监听离开页面时候的停止轮播
	window.onblur = ()=> {
		clearInterval(this.ds)    //清除定时器 
	}
	//监听左边按钮点击事件
	$('.sc_buleft').click(()=>{
		scrollDiv.style.marginLeft = (left+450) + "px";
		left+=450;
		if (left >= 0) {
			left = -3600;
		   }
		   clearInterval(this.ds)    //清除定时器 
	})
	$('.sc_buright').click(()=>{
		scrollDiv.style.marginLeft = (left-450) + "px";
		left-=450;
		if (left <= -3600) {
			left = 0;
		   }
		clearInterval(this.ds)
	})
}
var scrollShow=()=>{
	var targetHeight1 = $(".top1").offset().top;//获取到top1距离顶部的距离
	var targetHeight2 = $(".top2").offset().top;//获取到top1距离顶部的距离
	var targetHeight3 = $(".top3").offset().top;//获取到top1距离顶部的距离
	  $(window).scroll(function(){//显示绑定
		  var scrollTop = $(this).scrollTop();//获取到滚动条的位置
		  if(scrollTop>targetHeight1+200){
			 $('.top1').find('p').fadeIn(1100);
			 var imga=$('.top1').find('img');
			 var intro=$('.top1').find('.tops_intro');
			 imga.fadeIn(1100);
			 intro.fadeIn(1100);
			 //移动动画
			 var target=140;//移动到margiinleft20
			 clearInterval(imga.timer1);
			 clearInterval(imga.intro1);
			 imga.timer1 = setInterval(()=>{
				var current =imga.css('marginLeft');
				var lenth=parseInt(current.substring(0,current.length-2));
				if(lenth<140){
				document.getElementsByClassName("imgg")[0].style.marginLeft = (lenth+1) + "px";    //计算移动到的位置，数字类型，没有px  
				}
				else{
				   clearInterval(imga.timer1);
				}

			 },26)
			 intro.timer1 = setInterval(()=>{
				   var current =intro.css('marginLeft');
				   var lenth=parseInt(current.substring(0,current.length-2));
				   if(lenth>700){
				   document.getElementsByClassName("tops_intro")[0].style.marginLeft = (lenth-1) + "px";    //计算移动到的位置，数字类型，没有px  
				   }
				   else{
					  clearInterval(intro.timer1);
				   }

				},26)
		 }
		 if(scrollTop>targetHeight3+200){
			 $('.top3').find('p').fadeIn(1100);
			 var imga=$('.top3').find('img');
			 var intro=$('.top3').find('.tops_intro');
			 imga.fadeIn(1100);
			 intro.fadeIn(1100);
			 //移动动画
			 var target=140;//移动到margiinleft20
			 clearInterval(imga.timer1);
			 clearInterval(imga.intro1);
			 imga.timer1 = setInterval(()=>{
				var current =imga.css('marginLeft');
				var lenth=parseInt(current.substring(0,current.length-2));
				if(lenth<140){
				document.getElementsByClassName("imgg")[2].style.marginLeft = (lenth+1) + "px";    //计算移动到的位置，数字类型，没有px  
				}
				else{
				   clearInterval(imga.timer1);
				}

			 },26)
			 intro.timer1 = setInterval(()=>{
				   var current =intro.css('marginLeft');
				   var lenth=parseInt(current.substring(0,current.length-2));
				   if(lenth>700){
				   document.getElementsByClassName("tops_intro")[2].style.marginLeft = (lenth-1) + "px";    //计算移动到的位置，数字类型，没有px  
				   }
				   else{
					  clearInterval(intro.timer1);
				   }

				},26)
		 }
		 if(scrollTop>targetHeight2+200){
			 $('.top2').find('p').fadeIn(1100);
			 var img=$('.top2').find('img');
			 var intr=$('.top2').find('.tops_intro');
			 img.fadeIn(1100);
			 intr.fadeIn(1100);
			 //移动动画
			 clearInterval(img.timer);
			 clearInterval(intro.timer);
			 img.timer1 = setInterval(()=>{
				var current =img.css('marginLeft');
				var lenth=parseInt(current.substring(0,current.length-2));
				if(lenth>890){
				document.getElementsByClassName("imgg")[1].style.marginLeft = (lenth-1) + "px";    //计算移动到的位置，数字类型，没有px  
				}
				else{
				   clearInterval(img.timer1);
				}

			 },26)
			 intr.timer1 = setInterval(()=>{
				   var current =intr.css('marginLeft');
				   var lenth=parseInt(current.substring(0,current.length-2));
				   if(lenth<100){
				   document.getElementsByClassName("tops_intro")[1].style.marginLeft = (lenth+1) + "px";    //计算移动到的位置，数字类型，没有px  
				   }
				   else{
					  clearInterval(intr.timer1);
				   }

				},26)
		 }
		 
	  });
 }

export { 
    startScroll,scrollShow
}