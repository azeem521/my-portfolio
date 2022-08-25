import React from 'react'

import { Link } from 'react-scroll'

import './Navbar.css'


const Navbar = () => {
  return (
   <div className="n-wrapper" id='Navbar'>
    <div className="n-left">
        <div className="n-name">Mohd</div>
    
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>

                <li className='li'>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                    <li className='li'>Services</li>
                    </Link>
                    <Link spy={true} to='Navbar' smooth={true} >
                    <li className='li'>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li className='li'>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Navbar' smooth={true} >
                     <li className='li'>Testimonial</li>
                     </Link>
            </ul>
        </div>
        <div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
   </div>
  )
}

export default Navbar