import request from './fly';

const baseUrl = 'http://lease.wujigang.cn/';
const baseApi='/index/interfaceAjax';

const api = {
  getBannerList:()=>request.post(baseApi, {
    action: 'getBannerList',
    version: "V1",
    params: {
      "type": 1
    }
  }, {
    baseURL: baseUrl
  })
};

export default api;
