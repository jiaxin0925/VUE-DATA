import Index from '@/components/index'
import Login from '@/components/login'
import News from '@/components/news'
import Detail from '@/components/detail'


import List from '@/components/list'
import Play from '@/components/play'
import Tab from '@/components/tab'

import Tab1 from  "@/components/tabs/tab1"
import Tab2 from  "@/components/tabs/tab2"
import Tab3 from  "@/components/tabs/tab3"


const routes = [{
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
    {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/play',
    name: 'play',
    component: Play
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tab,
    children: [{
      path: "/tabs/tab1",
      component: Tab1
    }, {
      path: "/tabs/tab2",
      component: Tab2
    }, {
      path: "/tabs/tab3",
      component: Tab3
    }]
  }
];
export default routes;
