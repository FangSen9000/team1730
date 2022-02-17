import React from 'react';
import ProCard from '@ant-design/pro-card';



const Welcome = () => {
  return (
    <>
      <ProCard title="默认尺寸" extra="extra" tooltip="这是提示" style={{ maxWidth: 300 }}>
        <div>火山引擎，是字节跳动为企业提供的数字化服务的中台。该团队采用现有技术克隆了一个类似的数字化服务平台，以下称为火山引擎项目。</div>
        
      </ProCard>
      <ProCard
        title="小尺寸卡片"
        extra="extra"
        tooltip="这是提示"
        style={{ maxWidth: 300, marginTop: 24 }}
        size="small"
      >
        <div>该项目团队创建于2022年1月14日。由队长房森，队员葛传冰，王聪，薛彪，曹树慧五人组成。团队建立后命名为元气满满小白队。队伍编号为1730.项目正式开始于2022年1月24日。</div>
        
      </ProCard>
    </>
  );
};

export default Welcome;

