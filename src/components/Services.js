// ekorbi
import React from 'react';
import Box from './Box';
import image1 from '../Images/orgG.jpg';
import image2 from '../Images/gv70.jpg';
import image3 from '../Images/light.jpg'
function Services() {
  return (
      <div id='services'>
          <div className='s-heading'>
              <h1>捷尼赛思非凡体验</h1>
              <p>我们为你精心设计每一刻体验，激发你的灵感和想象。
以设计之名，开启你的全新境界。</p>
          </div>
          <div className='b-container'>
              <Box image={image1} alt="image"
                  button="Genesis G70" />
               <Box image={image2} alt="image"
                  button="Genesis GV70" />
              <Box image={image3} alt="image"
              button="Genesis GV80"/>
          </div>
    </div>
  )
}

export default Services