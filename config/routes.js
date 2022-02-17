export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: '工作台',
    icon: 'UserOutlined',
    component: '@/pages/Dashboard'
  },
  {
    path: '/userlist',
    name: '用户列表',
    icon: 'UserOutlined',
    component: '@/pages/Userlist'
  },
  {
    path: '/projects',
    name: '云工程',
    icon: 'ProjectOutlined',
    component: '@/pages/Projects'
  },
  {
    path: '/test',
    name: '项目测试',
    icon: 'SortDescendingOutlined',
    component: '@/pages/Test'
  },
  {
    path: '/analysis',
    name: '增长分析',
    icon: 'FundProjectionScreenOutlined',
    component: '@/pages/Analysis'
  },
  {
    path: '/list',
    name: '查询表格',
    icon: 'table',   
    component: '@/pages/TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },

  {
    component: './404',
  },
];
