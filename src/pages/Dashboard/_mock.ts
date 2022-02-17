import moment from 'moment';
import type { Request, Response } from 'express';
import type { SearchDataType, OfflineDataType, DataItem } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2: DataItem[] = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData: DataItem[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData: SearchDataType[] = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData: OfflineDataType[] = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData: DataItem[] = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const getNotice = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: '人总在进步中',
        updatedAt: new Date(),
        member: '房森',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        updatedAt: new Date('2022-02-16'),
        member: '王聪',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        updatedAt: new Date(),
        member: '葛传冰',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: '那时候我只会想自己想要什么，从不想自己拥有什么',
        updatedAt: new Date('2022-02-16'),
        member: '薛彪',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: '生命就像一盒巧克力，结果往往出人意料',
        updatedAt: new Date('2022-02-16'),
        member: '曹树慧',
        href: '',
        memberLink: '',
      },
      
    ],
  });
};

const getActivities = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'trend-1',
        updatedAt: new Date('2022-01-15'),
        user: {
          name: '房森',
          avatar: avatars2[0],
        },
        group: {
          name: '项目架构小组',
          link: 'https://github.com/FangSen9000/team1730',
        },
        project: {
          name: 'team1730',
          link: 'https://github.com/FangSen9000/team1730',
        },
        template: '在 @{group} 新建项目 @{project}',
      },
      {
        id: 'trend-2',
        updatedAt: new Date('2022-02-04'),
        user: {
          name: '王聪',
          avatar: avatars2[1],
        },
        group: {
          name: '登陆与主题小组',
          link: 'https://github.com/wangcong102',
        },
        project: {
          name: 'team1730第一轮整合后',
          link: 'https://github.com/FangSen9000/team1730',
        },
        template: '在 @{group} 更新项目为 @{project}',
      },
      {
        id: 'trend-3',
        updatedAt: new Date('2022-02-10'),
        user: {
          name: '房森、葛传冰、曹树慧',
          avatar: avatars2[2],
        },
        group: {
          name: '内容构建小组',
          link: 'https://github.com/FangSen9000/team1730',
        },
        project: {
          name: 'team1730第二轮整合后',
          link: 'https://github.com/FangSen9000/team1730',
        },
        template: '在 @{group} 更新项目为 @{project}',
      },
      {
        id: 'trend-4',
        updatedAt: new Date('2022-02-12'),
        user: {
          name: '房森、王聪、薛彪、葛传冰',
          avatar: avatars2[4],
        },
        project: {
          name: 'team1730第二轮整合后小更新2.0',
          link: 'https://github.com/FangSen9000/team1730',
        },
        template: '将 @{project} 更新至已测试版本状态',
      },
      {
        id: 'trend-5',
        updatedAt: new Date('2022-02-15'),
        user: {
          name: '房森、王聪',
          avatar: avatars2[3],
        },
        project: {
          name: 'team1730第三轮整合后',
          link: 'https://github.com/FangSen9000/team1730',
        },
        comment: {
          name: '开发环境及项目介绍',
          link: 'https://github.com/FangSen9000/team1730/blob/main/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.md',
        },
        template: '在 @{project} 发布了 @{comment}',
      },
      {
        id: 'trend-6',
        updatedAt: new Date('2022-02-16'),
        user: {
          name: '房森',
          avatar: avatars2[5],
        },
        group: {
          name: '发布测试优化小组',
          link: 'https://github.com/FangSen9000/team1730',
        },
        project: {
          name: '火山引擎后台管理系统',
          link: 'https://github.com/FangSen9000/team1730',
        },
        template: '在 @{group} 发布字节跳动 @{project}正式版1.0.0',
      },
    ],
  });
};

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: any[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getChartData = (_: Request, res: Response) => {
  res.json({
    data: {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      radarData,
    },
  });
};

export default {
  'GET  /api/project/notice': getNotice,
  'GET  /api/activities': getActivities,
  'GET  /api/fake_workplace_chart_data': getChartData,
};
