import React from "react";
import {Upload, message, Button} from 'antd';
// import { ossConfig } from "@/services/common ";
import {UploadOutlined} from "@ant-design/icons";

export default class OSSUpload extends React.Component {
  state = {
    OSSData: {},
  };

  /**
   * 组件挂载完成后, 进行初始化, 获取oss配置
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.init();
  }

  /**
   * 初始化, 获取oss上传签名
   *
   * @returns {Promise<void>}
   */
  init = async () => {
    try {
      const OSSData = await mockGetOSSData();

      this.setState({
        OSSData,
      });
    } catch (error) {
      message.error(error);
    }
  };

  /**
   * 文件上传过程中触发的回调函数, 直到上传完成
   *
   * @param fileList
   */
  onChange = ( { file } ) => {
    if (file.status === 'done') {
      // const {setCoverKey, insertImage} = this.props
      //
      // // 上传成功之后, 把文件的key, 设置为表单某个字段的值
      // if (setCoverKey) setCoverKey(file.key)
      //
      // // 上传完成之后, 如果需要url, 那么返回url给父组件
      // if (insertImage) insertImage(file.url)
      this.props.setCoverKey(file.key);
      message.success('上传成功')
    }
  };
  onRemove = (file) => {
    const { value, onChange } = this.props;

    const files = value.filter((v) => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };
  /**
   * 额外的上传参数
   *
   * @returns {Promise<void>}
   */
  getExtraData = file => {
    const { OSSData } = this.state;

    return {
      key: file.key,
      OSSAccessKeyId: OSSData.accessid,
      policy: OSSData.policy,
      Signature: OSSData.signature,
    };
  };

  /**
   * 选择文件之后, 上传文件之前, 执行回调
   *
   * @param file
   * @returns {Promise<*>}
   */
  beforeUpload = async file => {
    const { OSSData } = this.state;
    const expire = OSSData.expire * 1000;

    // 如果签名过期了, 重新获取
    if (expire < Date.now()) {
      await this.init();
    }

    const dir = 'react/' // 定义上传的目录

    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.key = OSSData.dir + dir + filename; // 在 getExtraData 函数中会用到, 在云存储中存储的文件的 key
    file.url = OSSData.host + OSSData.dir + dir + filename; // 上传完成后, 用于显示内容

    return file;
  };

  render() {
    const { value, accept, showUploadList } = this.props;
    const props = {
      accept: accept || '',
      name: 'file',
      fileList: value,
      action: this.state.OSSData.host,
      onChange: this.onChange,
      data: this.getExtraData,
      beforeUpload: this.beforeUpload,
      listType: "picture",
      maxCount: 1,
      showUploadList
    };
    return (
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>点击上传</Button>
        {/*{this.props.children}*/}
      </Upload>
    );
  }
}
