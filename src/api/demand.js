import request from '@/utils/request'

// 获取产品大类
export const getCategoryList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getCategoryList{value,label}}`
  }
})
// 获取产品小类
export const getSubCategoryList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getSubCategoryList{value,label}}`
  }
})
// 获取产品状态
export const getProductTypeList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getDicList(dicType:"plm_project_proposal_productType") {label,value}}`
  }
})
// 获取事业部/Team
export const getPlmActiveGroupList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getPlmActiveGroupList {label,value}}`
  }
})
// 获取需求状态列表
export const getDemandStatusList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getDicList(dicType:"plm_proposal_status") {label,value}}`
  }
})
// 获取PM用户列表
export const getProductManagerList = () => request({
  url: '/api/data-workflow-process-plm/graphql',
  method: 'POST',
  data: {
    query: `{getProductManagerList {label,value}}`
  }
})

// 查询需求列表
export const getDemandList = (data) => request({
  url: '/api/data-workflow-process-plm/proposalInfo/getList',
  method: 'POST',
  data
})
