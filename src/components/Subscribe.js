// ekorbi
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("2cnDcb3rXsAPvHvJ2");
function Subscribe() { 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e2qj4e4', 'template_6lm9h2e', e.target, '77KQeLIwhE1adteZr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    alert("You just subscribed to Genesis.")
  };
  return (
      <div id="subscribe">
          <h3>Subscribe</h3>
      <div className='subscribe-input'>
        <form ref={form} onSubmit={sendEmail} className="subform">
          <input type="email" placeholder="random@gmail.com" name="email"></input>
         <input className="submit" type="submit" value="Subscribe"></input>
        </form>
        </div>
        </div>
  )
}
export default Subscribe;