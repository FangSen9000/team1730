import request from '@/utils/request';

/**
  关于 request 第二参数 options, 常用的两个传参方式:

  1. params 传参, 也就是query传参, 多用于 get 请求, 查询数据使用, 类型是对象或者 URLSearchParams
  2. data 传参, 也就是body传参, 多用于提交表单数据, 类型是 any, 推荐使用对象

  /**
 * 获取商品列表
 *
 * @returns {Promise<void>}
 */
export async function getGoods(params) {
  return request('/admin/goods', {params});
}

// /**
//  * 禁用和启用用户
//  *
//  * @param uid 用户id
//  * @returns {Promise<any>}
//  */
// export async function lockUser(uid) {
//   return request.patch(`/admin/users/${uid}/lock`)
// }

// /**
//  * 添加用户
//  *
//  * @param params
//  * @returns {Promise<void>}
//  */
// export async function addUser(data) {
//   return request.post('/admin/users', {data})
// }

// /**
//  * 用户详情
//  *
//  * @param editId
//  * @returns {Promise<void>}
//  */
// export async function showUser(editId) {
//   return request.get(`/admin/users/${editId}`)
// }

// /**
//  * 更新用户
//  *
//  * @param params
//  * @returns {Promise<void>}
//  */
// export async function updateUser(editId, data) {
//   return request.put(`/admin/users/${editId}`, {data})
// }

/**
 * 上架和下架商品
 *
 * @param goodsId 商品 id
 * @returns {Promise<any>}
 */
export async function isOn(goodsId) {
  return request.patch(`/admin/goods/${goodsId}/on`)
}

/**
 * 推荐和不推荐商品
 *
 * @param goodsId 商品 id
 * @returns {Promise<any>}
 */
export async function isRecommend(goodsId) {
  return request.patch(`/admin/goods/${goodsId}/recommend`)
}


/**
 * 添加商品
 *
 * @param params
 * @returns {Promise<void>}
 */
export async function addGoods(data) {
  return request.post('/admin/goods', {data})
}

/**
 * 商品详情
 *
 * @param editId
 * @returns {Promise<void>}
 */
export async function showGoods(editId) {
  return request.get(`/admin/goods/${editId}?include=category`)
}

/**
 * 更新商品
 *
 * @returns {Promise<void>}
 * @param editId
 * @param data
 */
export async function updateGoods(editId, data) {
  return request.put(`/admin/goods/${editId}`, {data})
}
