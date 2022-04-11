// ekorbi
import React from 'react';
import Navbar from './Navbar'
import {Link} from "react-router-dom"
function Header() {
  return (
      <div id='main'>
          <Navbar />
          <div className='name'>
            <h1>Genesis in 中国</h1>  
              <p className='detail'>We design every experience to stimulate your imagination and enrich your life.</p>
        <div className='header-btns'>
          <a>
            <Link to="/login" className='cv-btn'>Login</Link>
          </a>
          <a>
            <Link to='/read-more' className='cv-btn1'>Read more</Link>
          </a>
          </div>
          </div>
         
      </div>
  )
}

export default Header;