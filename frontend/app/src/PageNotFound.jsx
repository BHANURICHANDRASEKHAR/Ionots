import React from 'react'
import page from './assets/404.gif'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export default function PageNotFound() {
  const navigate=useNavigate();
  return (
    <div className='svg1-container'>
    <img src={page}/><br/>
    </div>
    
  )
}
