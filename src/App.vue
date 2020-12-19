<template>
  <div id="app" >
    <router-view name="head"/>
    <router-view name="login"/>
    <router-view name="foot"/>
  </div>
</template>

<script>
// import header from '@/components/header'
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss">
@import './common/font.css';
// #app 
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// 
.el-table{
    background-color: #e8e9db;
    
}
.el-table--border, .el-table--group {
    border-color:  #c0c0c0;
}
.el-table--border:after, .el-table--group:after, .el-table:before {
    background-color: #c0c0c0;
}
.el-table td, .el-table--border th,.el-table th.is-leaf {
    border-bottom-color: #c0c0c0;
}
.el-table--border td, .el-table--border th {
    border-right-color: #c0c0c0;
}
  .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border {
    border-right: 1.5px solid #c0c0c0;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: #ffffff;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4ba3c3;
    color: #FFF;
}
.el-table th>.cell {font-weight: bold;font-family: '仿宋';font-size: 18px;}
.el-table th, .el-table tr {
    background-color: #f8edeb;
}
.el-tag{color:whitesmoke}

.img-box,.default-card-animation{
    padding: 20px;
}
html,body {
  height: 100%;
}  
</style>
