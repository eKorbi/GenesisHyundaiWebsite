// ekorbi
import React from 'react';
import image from '../Images/g-70.jpeg';
function Features() {
  return (
      <div id='features'>
          <div className='features-model'>
              <img src={image} alt="feature-image">
              </img>
          </div>
          <div className='features-text'>
              <h2>Features</h2>
              <h3>Genesis is <span>the Future</span> Itself</h3>
              <p>Athletic implies dynamism, and elegance conveys purism. The carefully controlled balance creates the distinctive design philosophy “Athletic Elegance”. Iconic design elements, such as Crest Grille, Quad Lamps, and Parabolic Line all take their inspiration from this starting point. Design starts with the brand, design is the brand.</p>
              <button>View More</button>
          </div>
    </div>
  )
}

export default Features;