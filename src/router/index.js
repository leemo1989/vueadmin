import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ttable from '@/components/table'
import tform from '@/components/form'
import yewu from '@/components/yewu'
import mot from '@/components/mot'
import vdetail from '@/components/vdetail'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        children:[
            {path:'/table',component:ttable},
            {path:'/form',component:tform},
            {
                path:'/yewu',
                component:yewu,
                children: [
                    {path:'/mot',component:mot},
                ]
            },
            {path:'/vdetail',component:vdetail},
        ]
      },

  ]
})
