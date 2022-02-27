import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
function Footer() {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'> DO You wanna step in to the future before others</h1>
            </div>
            <div className='gpt3__footer-btn'>
                <p>Request Early access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} />
                    <p>Tunis Tabarka, All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                    
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy </p>
                    
                    <p>Contact</p>
                    
                </div>

                <div className='gpt3__footer-links_div'>
                    <h4>Gt in touch</h4>
                    <p>Tunis </p>
                    <p>8112</p>
                    <p>safadkhili22@gmail.com</p>
                  
                    
                </div>
            </div>
            <div className='gpt3__footer-copyright'>
           <p> 2021GPT-3, all rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
