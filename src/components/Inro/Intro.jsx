import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import intro from '../../assets/hireme.png'
import Link from 'react-scroll'

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="intorText">
          {" "}
          I'm <span className="introName">Smith</span>
          <br /> website designer
        </span>
        <p className="introPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="btn"><img src={intro} alt="" />Hire Me</button>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
