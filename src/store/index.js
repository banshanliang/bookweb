import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      // name:'',//用户姓名
      // pass:'',//用户密码
      // tocken:''//用户tocken
    },
    mutations:{
      upuser(state,data){//修改state里面的user数据
        state.name=data.name;
        state.pass=data.pass;
        state.tocken=data.tocken
      }
    }
  })