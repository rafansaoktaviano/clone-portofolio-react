import React from 'react'
import "./projectcard.css"
import Button from '../Button/Button'

export default function Projectcard() {

  return (
    <div className='container'>
      <div className='cont-left'>
        <div className='logo-container'></div>
        <h1>Learn Webflow by Building designs from scratch.</h1>
        {/* <button>Learn more</button> */}
        <Button button1="Learn Webflow"/>
      </div>
      <div className="cont-right">
        <div className="image"></div>

      </div>
    </div>
  )
}
