import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button className='book-btn' onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button