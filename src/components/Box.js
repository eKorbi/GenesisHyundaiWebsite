// ekorbi
import React from 'react'

function Box(props) {
  return (
      <div className='s-box'>
          <div className='s-b-img'>
              <img src={props.image} alt='props.alt'/>
          </div>
          <div className='s-b-text'>
              <p>Genesis offers an exhilarating driving experience, where dynamic performance showcases the perfect balance between power and control. Genesis ranked highest overall in the 2018 J.D. Power U.S. Automotive Performance, Execution and Layout Study.</p>
              <a href="#" className='cv-btn2'>{props.button}</a>
          </div>
    </div>
  )
}

export default Box;