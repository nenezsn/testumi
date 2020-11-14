export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
export function patchRoutes(routes) {
  // console.log('routes',routes)
}
// 延迟渲染，先做鉴权
export function render(oldRender) {
  // setTimeout(oldRender, 1000);
  oldRender()
}
// 可以用于做埋点
export function onRouteChange({ location, routes, action }) {
  // console.log('loaction',location)
}

// export const request = {
//   prefix: 'https://pvp.qq.com',
// };
