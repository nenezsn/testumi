import { delay } from 'roadhog-api-doc';
const proxy =  {
  '/api/user':{name:"wangbing"},
  'POST /api/get.info':(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.body.page ==1){
      res.json({name:1})
    }else{
      res.json({name:2})
    }
  }
}
export default delay(proxy,20)
