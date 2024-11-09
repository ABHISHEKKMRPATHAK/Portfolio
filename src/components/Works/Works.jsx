import React from 'react'
import WorkImg1 from '../../assets/portfolio-1.png'
import WorkImg2 from '../../assets/portfolio-2.png'
import WorkImg3 from '../../assets/portfolio-3.png'
import WorkImg4 from '../../assets/portfolio-4.png'
import WorkImg5 from '../../assets/portfolio-5.png'
import WorkImg6 from '../../assets/portfolio-6.png'

import './Works.css'

function Works() {
  return (
    <section id='works'>
        <h2 className="worksTitle">Portfolio</h2>
        <p className="worksDesc">Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum has been the industry's standard dummy text ever</p>
        <div className="worksImgs">
            <img src={WorkImg1} alt="" className="workImg" />
            <img src={WorkImg2}alt="" className="workImg" />
            <img src={WorkImg3} alt="" className="workImg" />
            <img src={WorkImg4} alt="" className="workImg" />
            <img src={WorkImg5} alt="" className="workImg" />
            <img src={WorkImg6} alt="" className="workImg" />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works