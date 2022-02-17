import request from '@/utils/request';

/**
  关于 request 第二参数 options, 常用的两个传参方式:

  1. params 传参, 也就是query传参, 多用于 get 请求, 查询数据使用, 类型是对象或者 URLSearchParams
  2. data 传参, 也就是body传参, 多用于提交表单数据, 类型是 any, 推荐使用对象

 */

/**
 * 获取当前登录用户信息
 *
 * @returns {Promise<any>}
 */
export async function queryCurrent() {
  return request('/admin/user');
}

/**
 * 获取用户列表
 *
 * @returns {Promise<void>}
 */
export async function getUsers(params) {
  return request('/admin/users', {params});
}

/**
 * 禁用和启用用户
 *
 * @param uid 用户id
 * @returns {Promise<any>}
 */
export async function lockUser(uid) {
  return request.patch(`/admin/users/${uid}/lock`)
}

/**
 * 添加用户
 *
 * @param params
 * @returns {Promise<void>}
 */
export async function addUser(data) {
  return request.post('/admin/users', {data})
}

/**
 * 用户详情
 *
 * @param editId
 * @returns {Promise<void>}
 */
export async function showUser(editId) {
  return request.get(`/admin/users/${editId}`)
}

/**
 * 更新用户
 *
 * @param params
 * @returns {Promise<void>}
 */
export async function updateUser(editId, data) {
  return request.put(`/admin/users/${editId}`, {data})
}
