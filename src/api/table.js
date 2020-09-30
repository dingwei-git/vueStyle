import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-guoqing/table/list',
    method: 'get',
    params
  })
}
