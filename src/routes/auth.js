import React from 'react';
import { Button } from 'antd'
export default function Aindex ({children}){
  const [flag,setflag] = React.useState(true)
  return <div>
    <Button onClick={()=>setflag(!flag)}>切换</Button>
    {flag ? children : '未通过'}
  </div>
}
