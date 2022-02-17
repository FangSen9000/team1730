import React from 'react';
import {HeartTwoTone, SmileTwoTone} from '@ant-design/icons';
import {Card, Typography, Alert} from 'antd';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {useIntl} from 'umi';

const Admin = () => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone/> 字节云服务后台管理系统 <HeartTwoTone twoToneColor="#eb2f96"/> You
        </Typography.Title>
      </Card>


      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageHeaderWrapper>
  );
};

export default Admin;

// //=====================
//
// // import React from 'react';
// import {Button, Tag, Space} from 'antd';
// import ProList from '@ant-design/pro-list';
//
// const dataSource = [
//   {
//     name: '语雀的天空',
//     image:
//       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
//     desc: '我是一条测试的描述',
//   },
//   {
//     name: 'Ant Design',
//     image:
//       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
//     desc: '我是一条测试的描述',
//   },
//   {
//     name: '蚂蚁金服体验科技',
//     image:
//       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
//     desc: '我是一条测试的描述',
//   },
//   {
//     name: 'TechUI',
//     image:
//       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
//     desc: '我是一条测试的描述',
//   },
// ];
// export default () => (
//   <ProList>
//   <any>
//     toolBarRender={() => {
//     return [
//       <Button key="add" type="primary">
//         新建
//       </Button>,
//     ];
//   }}
//     onRow={(record: any) => {
//     return {
//       onMouseEnter: () => {
//         console.log(record);
//       },
//       onClick: () => {
//         console.log(record);
//       },
//     };
//   }}
//
//   </any>
//   </ProList>
//     );
