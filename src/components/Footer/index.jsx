
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} 元气满满小白队出品`}
      links={[
        {
          key: 'huo shan',
          title: '火山引擎',
          href: 'https://www.volcengine.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/FangSen9000/team1730',
          blankTarget: true,
        },
        {
          key: 'huo shan yin qin zhan',
          title: '火山引擎控制台',
          href: 'https://console.volcengine.com/home',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
