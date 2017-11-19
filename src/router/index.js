import Vue from 'vue'
import Router from 'vue-router'
import MainFrame from '@/components/MainFrame'
import LoginPaper from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPaper',
      component: LoginPaper
    },
    {
      path: '/MainFrame',
      name: 'MainFrame',
      component: MainFrame
    }
  ]
})
