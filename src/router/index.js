import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ttable from '@/components/table'
import tform from '@/components/form'
import yewu from '@/components/yewu'
import mot from '@/components/mot'
import vdetail from '@/components/vdetail'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import message from '@/components/message'
import unitwork from '@/components/unitwork'
import taskwork from '@/components/taskwork'
import domain from '@/views/Mdomain/domain'
import dorder from '@/views/Mdomain/dorder'
import dorderd from '@/views/Mdomain/dorderd'
import dorderzs from '@/views/Mdomain/dorderzs'
import dorderdns from '@/views/Mdomain/dorderdns'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/login',
          component: login,
      },
      {
          path:'/',
          redirect:'/login',
      },
      {
        path: '/',
        name: 'Home',
        component: Home,
        children:[
            {path:'/dashboard',component:dashboard},
            {path:'/table',component:ttable},
            {path:'/form',component:tform},
            {
                path:'/domain',component:domain,
                children: [
                    {path:'',component:domain},
                    {path:'order',component:dorder}
                ]
            },
            {path:'/dorderd/',component:dorderd},
            {path:'/dorderzs/',component:dorderzs},
            {path:'/dorderdns/',component:dorderdns},
            {
                path:'/dorder',
                component:dorder,
            },
            {path:'/message',component:message},
            {
                path:'/yewu',
                component:yewu,
                children: [
                    {path:'/mot',component:mot},
                ]
            },
            {path:'/unitwork',component:unitwork},
            {path:'/taskwork',component:taskwork},
            {path:'/vdetail',component:vdetail},
        ]
      },


  ]
})
