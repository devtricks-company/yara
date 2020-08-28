import React from 'react';
import {ImPhone} from 'react-icons/im';
import {FiMail} from 'react-icons/fi';
import {BsClock} from 'react-icons/bs';
import logo from '../images/yaralogo.png';


const Addressbar = () => {
    return (
        <div class="addressbar d-none d-lg-block">
           <div className="container">
               <a href="/" className="addressbar__logo">
                   <img src={logo} alt=""/>
               </a>
               <ul className="addressbar__menu">
                   <li className="addressbar__item">
                       <div className="addressbar__icon">
                           <ImPhone />
                       </div>
                       <div className="addressbar__details">
                           <p className="addressbar__title">Call Us</p>
                           <p className="addressbar__value">+98-71-36363881</p>
                       </div>
                   </li>
                   <li className="addressbar__item">
                   <div className="addressbar__icon">
                      <FiMail />
                   </div>
                       <div className="addressbar__details">
                           <p className="addressbar__title">Email</p>
                           <p className="addressbar__value">info@yaraia.com</p>
                       </div>
                   </li>
                   <li className="addressbar__item">
                   <div className="addressbar__icon">
                       <BsClock />
                   </div>
                       <div className="addressbar__details">
                           <p className="addressbar__title">Working Hours</p>
                           <p className="addressbar__value">Sat. - Thu. 9AM - 6PM</p>
                       </div>
                   </li>
               </ul>
           </div>
        </div>
    )
}

export default Addressbar
