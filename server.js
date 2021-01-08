const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression')
const urljoin = require('url-join')
const querystring = require('querystring')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression())

app.use(express.static('./dist'))

app.use('*', proxy('https://tapi.seentao.com', {
  proxyReqPathResolver: function (req) {
    const path = req.params[0].split('/').reverse();
    return urljoin('https://tapi.seentao.com', `${path[1]}/${path[0]}`);
  },
  proxyReqBodyDecorator: function (bodyContent, srcReq) {
    return querystring.stringify(bodyContent);
  },
  filter: function (req, res) {
    return req.method == 'POST';
  }
}));

app.get('*',(req,res,next)=>{
  res.status(200).sendFile(path.resolve('./dist/index.html'))
})
app.listen(3000,function(){
  console.log('server is running in http://localhost:3000')
})
