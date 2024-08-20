import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" /> */}
                <h1>FoodBite</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ut. Rerum aut voluptatibus praesentium in voluptatum nemo hic quidem eveniet perspiciatis totam! Quia, in perspiciatis!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-458-5555</li>
                    <li>contact@foodbite.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright 2024 foodBite.com - All right reserved</p>
    </div>
  )
}

export default Footer