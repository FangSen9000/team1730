import request from '@/utils/request';

/**
 * 获取分类列表 - 非禁用的分类
 *
 * @returns {Promise<void>}
 */
export async function getCategory() {
  return request('/admin/category');
}

