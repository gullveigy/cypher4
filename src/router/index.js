import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Expenditures from '@/components/expenditures'
import ContactUs from '@/components/contactUs'
import Expendi from '@/components/expendi'
import Edit from '@/components/edit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})



