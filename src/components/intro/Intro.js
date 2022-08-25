import React from 'react'
import './Intro.css'
import github from '../../img/github.svg'
import facebook from '../../img/facebook.svg'
import Azeem from '../../img/Azeem.jpg'
import linkedin from '../../img/linkedin.svg'


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Mohd Azeem</span>
                    <span>Front-End Developer with high level of experience in web designing and development, producting the Quality</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href='https://github.com/azeem521'>
                        <img src={github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/mohd-azeem-7819371b3/'>
                        <img src={linkedin} alt="" />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100075328053710'>
                        <img src={facebook} alt="" />
                    </a>

                </div>
            </div>
            <div className="i-right">
               <div className="i-image">
                <img src={Azeem} alt="slow internet" />
               </div>


               {/* blur div */}

               <div className="blur" style={{background:'#eb85e4'}}>
               </div>
               <div className="blur1" style={{background:'#c1acdc'}}>
               </div>
               {/* blure div end */}
            </div>
        </div>
    )
}

export default Intro