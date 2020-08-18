import Vue from 'vue'
import Router from 'vue-router'

const login = resolve => require(['../view/login.vue'],resolve)
const head = resolve => require(['../components/header.vue'],resolve)
const foot = resolve => require(['../components/foot.vue'],resolve)
const mainPath = resolve => require(['../view/mainPath.vue'],resolve)
const bookShow = resolve => require(['../view/bookShow/bookShow.vue'],resolve)
const starBooks = resolve => require(['../view/bookShow/starBooks.vue'],resolve)
const weight_index = resolve => require(['../view/weight/index.vue'],resolve)
const input_index = resolve => require(['../view/inputData/index.vue'],resolve)
const review = resolve => require(['../view/countManage/review.vue'],resolve)

Vue.use(Router)
//页面路由
export default new Router({
  routes: [
    {
      path: '/signIn',
      name:'login',
      components:{login,foot},//顶层路由，编写导航栏
    },
    {
      path: '/',
      redirect: '/signIn',
      name:'header',
      components:{ head,foot},//顶层路由，编写导航栏
      children:[//二层路由
        {
          path:'/mainPath',
          component: mainPath
        },
        {
          path:'/bookShow/bookShow',
          component: bookShow
        },
        {
          path:'/bookShow/starBooks',
          component: starBooks
        },
        {
          path:'/weight/index',
          component: weight_index
        },
        {
          path:'/inputData/index',
          component: input_index
        },
        {
          path:'/countManage/review',
          component: review
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
