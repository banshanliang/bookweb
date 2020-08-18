<template>
<div>
    <div class="logo">
        <img src="/static/MPimg/mainPath_logo.png">
    </div>
    <div class="login">
        <div class="loginbox">
            <p class="title">登 录</p>
            <div class="inputs">
                <form>
                <span class="s1">账号</span>
                <input type="text" class="i i1">
                <span class="s1">密码</span>
                <input type="password" class="i i2" autocomplete="off"></form>
            </div>
            <button class="ok" @click="uplogin">确认</button>
        </div>
    </div>
</div>
</template>
<script>
import{gettocken}from'../url.js'
export default {
   name:'',
   data(){
       return{
            user:{
               name:'',
               pass:'',
               tocken:''
            }
       }
   },
   methods:{
       uplogin(){
           this.user.name=$('.i1').val();
           this.user.pass=$('.i2').val();
           gettocken(this.user).then(res=>{
               this.$store.commit('upuser',res.data)//更改tocken
               this.$router.push('/mainPath');//跳转路由
               this.$message.success('登录成功')
           })
           .catch(err=>{
               console.log(err);
           })
       }
   } 
}
</script>
<style lang='scss'>
.logo{
    width: 100%;
    height: 80px;
    padding: 15px;
}
.logo img{
    width: 300px;
    margin-left: 20px;
}
.login{
    width: 100%;
    height: 680px;
    background:url('/static/MPimg/pic17.jpg')no-repeat;
    background-size: 100% auto;
    box-sizing: border-box;
    padding-top: 150px;
}
.loginbox{
    width: 350px;
    height: 300px;
    margin-left: 860px;
    background: whitesmoke;
    border-radius: 10px;
    border: 2px solid rgb(198, 224, 226);
    padding: 20px 30px 20px 40px
}
.title{
    text-align: center;
    font-size: 20px;
    color: rgb(243, 174, 45);
}
.inputs{
    margin-top: 40px;
    height: auto;
}
.s1{
    font-size: 20px;
    color: gray;
}
.i{
    margin-left: 10px;
    margin-bottom: 30px;
    height: 30px;
    width: 200px;
    border: 1.5px solid rgba(243, 174, 45,0.8);
    border-radius: 5px;;
    outline: none;
}
.ok{
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-left: 100px;
    border: 1.5px solid orange;
    border-radius: 5px;
    background: lemonchiffon;
    color: gray;
    outline: none;
}
</style>
