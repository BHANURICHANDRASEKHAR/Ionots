import React from 'react'
import './input.css'

export default function Input({label,handler,value,type,placeholder,name}) {
  return (
    <div className="form-group mt-3">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      className="form-control mt-1"
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </div>
  )
}
