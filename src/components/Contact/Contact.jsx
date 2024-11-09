import React, { useRef } from 'react'
import './Contact.css'
import clientImg1 from '../../assets/adobe.png'
import clientImg2 from '../../assets/facebook.png'
import clientImg3 from '../../assets/microsoft.png'
import clientImg4 from '../../assets/walmart.png'
import icon1 from '../../assets/facebook-icon.png'
import icon2 from '../../assets/instagram.png'
import icon3 from '../../assets/twitter.png'
import icon4 from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
       <div id="client">
          <h2 className="clientTitle">My Clients</h2>
          <p className="clientDesc">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever</p>
          <div className="clientImgs">
            <img src={clientImg1} alt="clientImg1" className="clientImg" />
            <img src={clientImg2} alt="clientImg2" className="clientImg" />
            <img src={clientImg3} alt="clientImg3" className="clientImg" />
            <img src={clientImg4} alt="clientImg4" className="clientImg" />
          </div>
        </div>
        <div id="contact">
            <h1 className="contatTitle">Contact Me</h1>
            <span className="contactDesc">Please fill form for discussing any work opportunities</span>
            <form ref={form} action={sendEmail} className="contactForm">
                <input type="text" name="" id="name" placeholder='Name'/>
                <input type="email" name="" id="Email" placeholder='Email'/>
                <textarea id="message" placeholder='Enter your message' rows={5}></textarea>
                <button className="formSubmit" type='Submit' value='send'>Submit</button>
                <div className="links">
                    <img src={icon1} alt="icon1" className="link" />
                    <img src={icon2} alt="icon2" className="link" />
                    <img src={icon3} alt="icon3" className="link" />
                    <img src={icon4} alt="icon4" className="link" />
                </div>
            </form>
        </div>

    </section>
    
  )
}

export default Contact