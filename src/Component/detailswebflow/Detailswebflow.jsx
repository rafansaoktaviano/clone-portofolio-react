import React from 'react'
import "./detailswebflow.css"
export default function Detailswebflow(props) {
  return (
    <div className='wrap'>
      <div className="smile"><i class='bx bx-wink-smile'></i></div>
      <h1 className='text-det'>{props.detail}</h1>
    </div>
  )
}
