import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import intro from '../../assets/hireme.png'
import Link from 'react-scroll'

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intorText">
          I'm <span className="introName">Abhishek Kumar Pathak</span>
          <br /> Frontend Developer</span>
        <p className="introPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <button className="btn"><img src={intro} alt="Hire" className="btnImg"/>Hire Me</button>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
