import React from 'react'
import './Footer.css'
import bg from '../../img/bg1.png'
import Insta from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={bg} style={{width:'100%'}} alt="" />
        <div className="f-content">
            <span>azeemsre1@gmail.com</span>
            <div className="f-icons">
              <a href='https://www.linkedin.com/in/mohd-azeem-7819371b3/'>
              <Insta color='white' size='3rem'/>
              </a>
              
                <a href='https://www.facebook.com/profile.php?id=100075328053710'>
                <Facebook color='white' size='3rem'/>
                </a>
                <a href='https://github.com/azeem521'>
                <Github color='white' size='3rem'/>
                </a>
                

            </div>
        </div>
    </div>  
  )
}

export default Footer