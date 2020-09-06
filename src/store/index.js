import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      // user_name:'',//用户姓名（即登录账户）
      // authority'',//用户权限
      // token:''//用户tocken
    },
    mutations:{
      upuser(state,data){//修改state里面的user数据
        state.user_name=data.user_name;
        state.token=data.token;
        state.authority=data.authority;
      }
    }
  })