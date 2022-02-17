// import React, {useEffect, useState} from 'react';
// import ProForm, {
//   ProFormText,
//   ProFormTextArea,
//   ProFormDigit,
// } from "@ant-design/pro-form";
// import {message, Modal, Skeleton, Cascader, Button, Image} from "antd";
// import {getCategory} from '@/services/category'
// import {addGoods, showGoods, updateGoods} from '@/services/goods'
// import {UploadOutlined} from "@ant-design/icons";
// import Editor from '@/components/Editor'
// import OSSUpload from "@/components/OSS";
//
// const CreateOrEdit = (props) => {
//
//   // 将表单初始化的值设置成状态, 在编辑的时候, 使用这个状态
//   const [initialValues, setInitialValues] = useState(undefined)
//   const [options, setOptions] = useState([])
//
//   // 定义Form实例, 用来操作表单
//   const [formObj] = ProForm.useForm()
//   // 设置表单的值
//   // formObj.setFieldsValue({fieldName: value})
//
//   const { isModalVisible } = props // 模态框是否显示
//   const { isShowModal } = props // 操作模态框显示隐藏的方法
//   const { actionRef } = props // 父组件传过来的表格的引用, 可以用来操作表格, 比如刷新表格
//   const { editId } = props // 要编辑的ID, 添加的时候是undefined, 只有编辑才有
//
//   // 添加 或者 编辑 的描述文字
//   const type = editId === undefined ? '添加' : '编辑'
//
//   useEffect(async () => {
//     // 查询分类数据
//     const resCategory = await getCategory()
//     if (resCategory.status === undefined) setOptions(resCategory)
//
//     // 发送请求, 获取商品详情
//     if (editId !== undefined) {
//       const response = await showGoods(editId)
//       console.log(response);
//       // 获取数据之后, 修改状态, 状态改变, 组件重新渲染, 骨架屏消失, 编辑表单出现
//       const {pid, id} = response.category
//       const defaultCategory = pid === 0 ? [id] : [pid, id]
//       setInitialValues({...response, category_id: defaultCategory})
//     }
//   }, [])
//
//   /**
//    * 文件上传成功后, 设置cover字段的value
//    * @param fileKey
//    */
//   const setCoverKey = fileKey => formObj.setFieldsValue({'cover': fileKey})
//
//   /**
//    * 编辑输入内容后, 设置details字段的value
//    * @param fileKey
//    */
//   const setDetails = content => formObj.setFieldsValue({'details': content})
//
//   /**
//    * 提交表单, 执行编辑或者添加
//    *
//    * @param values
//    * @returns {Promise<void>}
//    */
//   const handleSubmit = async values => {
//     let response = {}
//     if (editId === undefined) { // 执行添加
//       // 发送请求, 添加商品
//       response = await addGoods({...values, category_id: values.category_id[1]})
//     } else { // 执行编辑
//       // 发送请求, 更新商品
//       response = await updateGoods(editId, {...values, category_id: values.category_id[1]})
//     }
//
//     if (response.status === undefined) {
//       message.success(`${type}成功`)
//       // 刷新表格数据
//       actionRef.current.reload()
//       // 关闭模态框
//       isShowModal(false)
//     }
//   }
//
//   return (
//     <Modal
//       title={`${type}商品`}
//       visible={isModalVisible}
//       onCancel={() => isShowModal(false) }
//       footer={null}
//       destroyOnClose={true}
//     >
//
//       {
//         // 只有是编辑的情况下, 并且要显示的数据还没有返回, 才显示骨架屏
//         initialValues === undefined && editId !== undefined ? <Skeleton active={true} paragraph={{ rows: 4 } } /> :
//           <ProForm
//             form={formObj}
//             initialValues={ initialValues }
//             onFinish={ values => handleSubmit(values) }
//           >
//
//             <ProForm.Item
//               name="category_id"
//               label="分类"
//               rules={[{required: true, message: '请选择分类'}]}
//             >
//               <Cascader
//                 fieldNames={ {label: 'name', value: 'id'} }
//                 options={options}
//                 placeholder="请选择分类"
//               />
//             </ProForm.Item>
//
//             <ProFormText
//               name="title"
//               label="商品名"
//               placeholder="请输入商品名"
//               rules={[{required: true, message: '请输入商品名'},]}
//             />
//
//             <ProFormTextArea
//               name="description"
//               label="描述"
//               placeholder="请输入描述"
//               rules={[{required: true, message: '请输入描述'},]}
//             />
//
//             <ProFormDigit
//               name="price"
//               label="价格"
//               placeholder="请输入价格"
//               min={0}
//               max={99999999}
//               rules={[{required: true, message: '请输入价格'},]}
//             />
//
//             <ProFormDigit
//               name="stock"
//               label="库存"
//               placeholder="请输入库存"
//               min={0}
//               max={99999999}
//               rules={[{required: true, message: '请输入库存'},]}
//             />
//
//             <ProFormText name="cover" hidden={true}/>
//
//             <ProForm.Item
//               name="cover"
//               label="商品主图"
//               rules={[{required: true, message: '请上传商品主图'}]}
//             >
//               <div>
//                 <OSSUpload
//                   accept="image/*"
//                   setCoverKey={setCoverKey}
//                   showUploadList={true}
//                 >
//                   <Button icon={<UploadOutlined />}>点击上传商品主图</Button>
//                 </OSSUpload>
//                 {
//                   initialValues === undefined || !initialValues.cover_url ? '' :
//                     <Image width={200} src={initialValues.cover_url} />
//                 }
//               </div>
//             </ProForm.Item>
//
//             <ProForm.Item
//               name="details"
//               label="商品详情"
//               rules={[{required: true, message: '请输入详情'}]}
//             >
//               <Editor
//                 setDetails={setDetails}
//                 content={initialValues === undefined ? '' : initialValues.details}
//               />
//             </ProForm.Item>
//           </ProForm>
//       }
//     </Modal>
//   );
// };
//
// export default CreateOrEdit;
