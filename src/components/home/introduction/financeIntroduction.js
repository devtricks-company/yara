import React from 'react'
import growth from '../../../images/growth.svg';

const FinanceIntroduction = () => {
    return (
        <div class="financeintroduction">
            <img src={growth} alt=""/>
        <h3>Financial Managment</h3>
        <ul>
            <li><a href="/services">Valuation</a></li>
            <li><a href="/services">Investment Advisory</a></li>
            <li><a href="/services">Merger and Acquisition</a></li>
            <li><a href="/services">Financial Target Planning</a></li>
            <li><a href="/services">Fundraising</a></li>
            <li><a href="/services">Restructuring</a></li>
        </ul>
        </div>
    )
}

export default FinanceIntroduction
