<template>
<div class="Header">
<el-menu
  :default-active="this.$route.path" router
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item  index="/mainPath" >首页</el-menu-item>
  <el-submenu index="/bookShow">
    <template slot="title">我的图书</template>
    <el-menu-item index="/bookShow/bookShow">图书推荐</el-menu-item>
    <el-menu-item index="/bookShow/starBooks">个人收藏</el-menu-item>
  </el-submenu>
  <el-menu-item index="/weight/index" >权重关联</el-menu-item>
  <el-menu-item index="/inputData/index">数据录入</el-menu-item>
  <el-submenu index="/countManage" class="countManage">
    <template slot="title">账号管理</template>
    <el-menu-item @click="tologin">退出登录</el-menu-item>
    <el-menu-item index="/countManage/review">修改密码</el-menu-item>
  </el-submenu>
</el-menu>
  <router-view/>
</div>
</template>
<script>
export default {
   name:'Header',
   data(){
       return{
       };
   },
   methods:{
       handleSelect(key,keyPath){
           console.log(key,keyPath)
       },
       tologin(){
         this.$router.replace('/signIn')
       }
   }
}
</script>
<style lang="scss">
.countManage{
    float: right !important; 
}
</style>
