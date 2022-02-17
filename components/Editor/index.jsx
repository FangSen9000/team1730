import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import './index.less'
import OSSUpload from "@/components/OSS";


export default class EditorDemo extends React.Component {

  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(this.props.content ?? null)
  }

  /**
   * 编辑器内容改变的时候执行
   */
  handleEditorChange = (editorState) => {
    // 更新编辑器的状态
    this.setState({ editorState })

    // 要判断输入的内容, 如果有内容, 设置输入的内容; 如果没有内容, 设置成空字符串  ''
    if (!editorState.isEmpty()) { // 为什么这么判断? 因为即使是没有内容 editorState.toHTML() 也是一对空标签, 不是直接给表单使用
      // 可直接调用editorState.toHTML()来获取HTML格式的内容
      const content = editorState.toHTML()
      // 调用父组件的函数, 将编辑器输入的内容传递回去
      this.props.setDetails(content)
    } else {
      // 调用父组件的函数, 将编辑器输入的内容传递回去
      this.props.setDetails('')
    }

  }

  /**
   * 图片上传完成后执行此方法, 用来在编辑器中显示图片
   */
  insertImage = url => {
    this.setState({
      editorState: ContentUtils.insertMedias(this.state.editorState, [{
        type: 'IMAGE',
        url
      }])
    })
  }

  render () {
    // 自定义控件 - 插入图片
    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <OSSUpload
            accept="image/*"
            insertImage={this.insertImage}
            showUploadList={false}
          >
            {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
            <button type="button" className="control-item button upload-button" data-title="插入图片">
              插入图片
            </button>
          </OSSUpload>
        )
      }
    ]
    const { editorState } = this.state
    return (
      <div className="my-editor">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          extendControls={extendControls}
        />
      </div>
    )

  }
}
