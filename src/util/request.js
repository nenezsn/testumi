import { extend } from "umi-request";
function querystring(body) {
  return Object.keys(body).map(item => {
    return `${item}=${body[item]}`
  }).join('&')
}
const request = extend({
  prefix: "/test/",
  timeout: 1000, //超时取消处理
  headers: {
    "Content-Type": "multipart/form-data"
  },
  errorHandler: function (error) {
    console.log('error', error)
  }
});
export default function(url,params={}){
  return request.post(url, {
    body: querystring(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}
