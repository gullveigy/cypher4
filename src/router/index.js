import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Expenditures from '@/components/Expenditures'
import ContactUs from '@/components/ContactUs'
import Expendi from '@/components/Expendi'
import Edit from '@/components/Edit'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/expenditures',
      name: 'Expenditures',
      component: Expenditures
    },
    {
      path: '/expendi',
      name: 'Expendi',
      component: Expendi
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})



