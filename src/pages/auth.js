import React from 'react';
import { Button } from 'antd'
export default function Aindex ({children}){
  const [flag,setflag] = React.useState(true)
  return <div>
    {true ? children : '未通过'}
  </div>
}
