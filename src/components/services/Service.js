import React from 'react'
import './Service.css'
import em1 from '../../img/em1.png'
import em2 from '../../img/em2.png'
import em3 from '../../img/em3.png'
import cv from '../../img/resume2.png'
import Card from '../card/Card'


const Service = () => {
  
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem totam quibusdam <br/>asperiores, pariatur ullam aspernatur veniam nemo suscipit nulla.</span>
            <div className="btn-div">
            <a href={cv} download = {cv}>
            <button className='button s-button'>Download CV</button>
            </a>
            
            </div>
           
          

        </div>
        {/* right side */}
        <div className="cards">

          
       


       <div style={{left: '12rem',top:'4rem'}}>
       <Card 
          emoji = {em2}
          heading = {'Developer'}
          detail = {'HTML, CSS, JavaScript, Bootstrap, React'}
      

          />
       </div>
       
        {/* second card */}
        <div style={{top:'16rem', left:'-16rem'}}>
          <Card 
          emoji={em1}
          heading={'Design'}
          detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          />
        </div>
        {/* 3rd card */}
        <div style={{top:'26rem', left:'5rem'}}>
        <Card 
        emoji={em3}
        heading={"UI/UX"}
        detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
        </div>
        </div>
       
    </div>
  )
}

export default Service