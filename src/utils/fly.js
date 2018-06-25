import wx from './wx'
import qs from 'qs'

var Fly = require('flyio/dist/npm/wx');
const request = new Fly();

request.config.timeout = 10 * 1000;
request.interceptors.request.use((request) => {
  if (request.method === 'POST' || request.method === 'post') {
    request.body = qs.stringify(request.body)
  }
  wx.showLoading({ title: '拼命加载中...' });
  return request
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading();
    wx.showToast({
      title: err.message,
      icon: 'none'
    });
    return promise.resolve()
  }
);

export default request
