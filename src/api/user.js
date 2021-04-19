import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

/**
 * 注销接口
 * @export login
 * @param {*} data 参数
 * @returns promise
 */
export function logout(data = {}) {
  return request({
    url: '/api/user/logout',
    method: 'post',
    data
  })
}

// 通过ticket获取用户信息
export function getUserDataByTicket(params) {
  return request({
    url: `/api/data-validate-user/validateUser/getUserData`,
    method: 'get',
    params
  })
}

export function getInfo(data = {}) {
  return request({
    url: '/api/user/userInfo/getUserInfoByToken',
    method: 'post',
    data
  })
}

/**
 * 获取菜单列表
 * @param {*} data 查询参数
 */
export const getNewUserMenu = () => request({
  url: `/api/data-sys/systemRight/getUserMenuByToken/plm`,
  method: 'get',
  params: {}
})
/**
 * 根据权限按钮
 * @param {*} data 过滤参数
 */
export const getUserButtonRight = () => request({
  url: `/api/data-sys/systemRight/getUserButtonRightByToken/plm`,
  method: 'get',
  params: {}
})
