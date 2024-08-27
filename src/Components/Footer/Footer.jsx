import React from 'react'
import "./Footer.css"
import logo from "../../assets/Ishika Jain.png";

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-content'>
    <div className='f-left'>
    <div className='tagline'>
      <p>"Your Vision, My Code—Together, We Build Success."</p>
      </div>
      <div >
         <a href="https://www.linkedin.com/in/ishika-jain08/" className="icon"><i class="ri-linkedin-fill"></i></a>
         <a href="https://github.com/Ishika-Jain08" className="icon"><i class="ri-github-fill"></i></a>
         <a href="https://x.com/Ishika0811" className="icon"><i class="ri-twitter-fill"></i></a>
         </div>
    </div>
      <div className='f-center'>
      <img src={logo} alt="" className="logo-f" />
      <h3 className='f-name'>ISHIKA JAIN</h3>
      </div>
      <div className='f-right'>
      <div>
      <h2>Get in Touch</h2>
      </div>
      <div>

      <li>Call : 8269017967</li>
      <li>  Email :   ishikajian@gmail.com</li>
      </div>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>
            Copyright 2024 @ personal_portfolio_Ishika_Jain.com - All Right Reserved.
        </p>
    </div>
    
    </>
  )
}

export default Footer
