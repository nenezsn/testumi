import { extend } from "umi-request";
import querystring from 'querystring'

const request = extend({
  prefix: "/test/",
  timeout: 1000, //超时取消处理
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  errorHandler: function (error) {
    const { response = {} } = error
    if (response.status < 200 ||
      response.status > 300) {
      return {
        code: response.status,
        msg: '有问题接口:' + response.url + ':' + response.statusText
      }
    }
  }
});
export default function (url, params = {}) {
  return request.post(url, {
    body: querystring.stringify(params)
  })
}
