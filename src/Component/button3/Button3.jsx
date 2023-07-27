import React from 'react'
import "./button3.css"
export default function Button3(props) {
  return (
    <div >
      <button className={`${props.background}`}>{props.tombol}</button>
    </div>
  )
}


