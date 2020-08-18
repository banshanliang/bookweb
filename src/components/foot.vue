<template>
<div class="footer">
   <p>关于图书推荐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系我们</p>
   <p>Copyright&nbsp;&nbsp;2020&nbsp;&nbsp;tushutuijian.com&nbsp;&nbsp;川ICP备1804531号-5</p>
</div>
</template>
<script>
export default {
   name:'',
}
</script>
<style lang='scss'>
.footer {
	width: 100%;
	height: 150px;
	background:url('/static/MPimg/pic02.png');
	opacity: 0.8;
	text-align: center;
}

.footer p {
	opacity: 1;
	color: white;
	padding-top: 50px;
	line-height: 100%;
}

.footer p:last-child {
	width: 28%;
	margin: 0 auto;
	padding: 10px 0 15px 0;
	border-bottom: 2px dashed orange;
}
</style>
