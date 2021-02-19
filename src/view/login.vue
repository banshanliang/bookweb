<template>
<div>
    <div class="logo">
        <img src="/static/MPimg/mainPath_logo.png">
    </div>
    <div class="login">
        <div class="icon_menu3">
                <p id="linkabout2" href="">书卷多情似故人</p>
            </div>
            <div class="icon_menu4">
                <p id="linkabout" href="">晨昏忧乐每相亲</p>
            </div>
        <div class="loginbox">
            <p class="title">登 录</p>
            <div class="inputs">
                <form>
                <span class="s1 el-icon-user"> 账号</span>
                <input type="text" class="i i1">
                <span class="s1 el-icon-arrow-right"> 密码</span>
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
               user_name:'',
               user_pass:'',
               token:'',
               authority:''
            }
       }
   },
   mounted(){
       console.log('测试')
        let origin = [1,2,[3,4,[6,7]],5];
        let s = origin.flat();
    //    s=s.replace(/,/g,'');
       console.log(s);
       console.log(typeof s);
   },
   methods:{
       uplogin(){
           this.user.user_name=$('.i1').val();
           this.user.user_pass=$('.i2').val();
           if(!this.user.user_pass || !this.user.user_name)
           this.$message.error('请输入账号密码')
           else
           gettocken(this.user).then(res=>{
               this.user.token=res.data.token
               this.user.authority=res.data.authority
               this.$store.commit('upuser',this.user)//更改全局tocken、authority与user_name
               this.$router.push('/mainPath');//跳转路由
               this.$message.success('登录成功')
               console.log(this.$store.state)
           })
           .catch(err=>{
               console.log(err);
           })
       }
   } 
}
</script>
<style lang='scss'>
.icon_menu3{
    margin-left: 550px;
    margin-top: 30px;
    float: left;
    width: 40px;
    height: 40px;
    border-right: solid 1.5px  #3d5a80;
    border-bottom: solid 1.5px  #3d5a80;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
}
.icon_menu4{
    
    margin-left: 50px;
    margin-top: 70px;
    float: left;
    width: 40px;
    height: 40px;
    border-right: solid 1.5px  #3d5a80;
    border-bottom: solid 1.5px  #3d5a80;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
}
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
    width: 180px;
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
.icon_menu3 p{
    font-family: '方正手写体1';
    color: #3d5a80;
    font-size: 25px;
    transition: color .5;
    -webkit-transition: all .5s; 
    -moz-transition: all .5s; 
    -ms-transition: all .5s; 
    -o-transition: all .5s; 

}
.icon_menu4 p{
    font-family: '方正手写体1';
    color: #3d5a80;
    font-size: 25px;
    transition: color .5;
    -webkit-transition: all .5s; 
    -moz-transition: all .5s; 
    -ms-transition: all .5s; 
    -o-transition: all .5s; 

}
.icon_menu3 p:hover{
        font-size: 30px;
    color: #98c1d9;
}
.icon_menu4 p:hover{
        font-size: 30px;
    color: #98c1d9;
}
</style>
