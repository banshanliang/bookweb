<template>
<div>
    <el-form label-width="130px" :inline="true" style="padding:10px 10px 0 10px" v-if="this.$store.state.authority=='admin'">
        <el-form-item label="输入旧密码："  prop="desc" style="margin-bottom:1px">
                <el-input type="text"   label="输入旧密码  ："  class="resizeNone" v-model="pass.oldPass" placeholder="请输入密码"></el-input>
        </el-form-item>
         <el-form-item label="输入新密码："  prop="desc" style="margin-bottom:1px">
                <el-input type="text"   label="输入新密码  ："  class="resizeNone" v-model="new1" placeholder="请输入密码"></el-input>
        </el-form-item> <el-form-item label="再次确认密码："  prop="desc" style="margin-bottom:1px">
                <el-input type="text"   label="输入新密码  ："  class="resizeNone" v-model="new2" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleClick">确认修改</el-button>
          </el-form-item>
    </el-form>
</div>
</template>
<script>
import{changePass}from'../../url.js'
export default {
   name:'',
   data(){
       return{
               new1:'',
               new2:'',
               pass:{
                       oldPass:'',
                       user_name:'',
                       newPass:''
               }
	   }
   },
   methods:{
        handleClick(){
                this.pass.user_name=this.$store.state.user_name;
                if(this.new1!=this.new2){
                        this.$message.error('两次密码输入不一致');
                }
                else{
                   this.pass.newPass=this.new2
                   changePass(this.pass).then(res => {
                           this.$message.success('修改成功');
                   }).catch(err=>{
                           this.$message.error('修改失败');
                   })
                }
        }
   }
}
</script>
<style scoped>

</style>
