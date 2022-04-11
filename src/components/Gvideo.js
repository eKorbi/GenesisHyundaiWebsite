// ekorbi
import React from 'react';
import video from "../Images/Homepage-video.mp4"
const Gvideo = () => {
    return (
        <div className='wrapper'>
          <iframe 
            src={video}
            title="Genesis GV80" frameborder="0" muted></iframe>
        </div>
        
    )
};
export default Gvideo;