import React from 'react'
import Introduction from './introduction'
import BussinessIntroduction from './bussinessIntroduction';
import money from '../../../images/money.svg'
import idea from '../../../images/idea.svg';
import growth from '../../../images/growth.svg';

const Homeintroduction = () => {
    return (
        <section className="introduction">
            <div className="container-fluid introduction__container">
               <div className="intro-section">
                   <h3>INTRODUCTION</h3>
                   <h2>YARA</h2>
                   <p>Yara is a collection of service and consulting companies providing business consulting, financial management, digital marketing, and online solutions.</p>
               </div>
                <div class="bussiness">
                    <img src={money} alt="money"/>
                    <h2>Business Consulting</h2>
                    <ul>
                        <li><a href="/services">Strategic Management</a></li>
                        <li><a href="/services">Growth and Create Competitve Advantage</a></li>
                        <li><a href="/services">Coordinate Budgeting with Business Strategy</a></li>
                        <li><a href="/services">Customer Oriented Business Consulting</a></li>
                        <li><a href="/services">Digital Marketing and Content Management</a></li>
                        <li><a href="/services">Logo Design and Visual Identity</a></li>
                    </ul>
                </div>
                <div class="finance">
                    <img src={growth} alt="money"/>
                    <h2>Financial Managment</h2>
                    <ul>
                        <li><a href="/services">Valuation</a></li>
                        <li><a href="/services">Investment Advisory</a></li>
                        <li><a href="/services">Merger and Acquisition</a></li>
                        <li><a href="/services">Financial Target Planning</a></li>
                        <li><a href="/services">Fundraising</a></li>
                        <li><a href="/services">Restructuring</a></li>
                    </ul>
                </div>
                <div class="technology">
                    <img src={idea} alt="money"/>
                    <h2>Technology Services</h2>
                    <ul>
                        <li><a href="/services">Data Analysis</a></li>
                        <li><a href="/services">Startup Acceleration</a></li>
                        <li><a href="/services">Designing Technology Based Sulotions</a></li>
                        <li><a href="/services">Financial Target Planning</a></li>
                        <li><a href="/services">Web and Apps Development</a></li>
                    
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Homeintroduction
