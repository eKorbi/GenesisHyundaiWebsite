// ekorbi
import React from 'react';
import img1 from '../Images/genesis1.jpg';
import img3 from '../Images/genesis3.png'
import img4 from '../Images/genesis4.jpg'
import img5 from '../Images/genesis5.webp'
import {Link} from 'react-router-dom'
export default function Genesis() {
    return (
        <div className='read'>
            <div className='modal-content'>
                  <Link to="/" className='close'>X</Link>
        </div>
            <div className='read-more'>
                <div>
                 <h3>OUR VISION AND MISSION</h3>
            <p>
                We strive to create the finest automobiles and related products and services for connoisseurs around the world and to make a positive difference to our customers’ lives.
                </p>
                <h3>OUR WAY</h3>
                <p>
                    Thinking of new paths and exploring in a thoughtful way is our pioneering way to creating something truly compelling.
                </p>
                <h3>MODELS & LINE-UP</h3>
                <p>We constantly seek new avenues to create aspiring products through mindful innovation that connect our customers to the brand and the world.</p>
                <h3>Genesis journey</h3>
                <p>
                    Our journey has just begun and we are constantly pushing forward the boundaries in an infinite yet mindful ways to creating new journeys.<a><Link to='/genesis-ceo'> Markus Henne </Link></a>is very determined to make Genesis an automobile leader.
                </p>
                </div>
              
        <div className='wrap'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CN5Nh3khA5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
            <div className='genesis-grid'>
            <img class="image-grid-col-2 image-grid-row-2" src={img1} alt="architecture"></img>
            <img src={img3} alt="architecture"></img>
            <img src={img4} alt="architecture"></img>
            <img src={img5} alt="architecture"></img>
            </div>
  </div>)
}