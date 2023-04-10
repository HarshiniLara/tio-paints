import React, { useEffect, useState } from 'react';
import "../css/footer.css";
import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';
const Footer=()=>{
    const d=new Date()
    const year=d.getFullYear()
    const[time,setTime]=new useState(year)
    useEffect(()=>{setInterval(()=>setTime(year),1000)},[])
    return(
        <div className='footer'>
            <div className='footer_padding'>
                <div className='footer_link'>
                    <div className='footer_link_div'>
                <h4>
                    For Business
                </h4>
                <a>
                    Employer
                </a>
                <a>
                    Health Plan
                </a>
                <a>
                    Individual
                </a>
                    </div>
                    <div className='footer_link_div'>
                        <h4>
                            Resources
                        </h4>
                        <a>
                            Resource Center
                        </a>
                        <a>
                            Testimonials
                        </a>
                        <a>
                            STV
                        </a>
                    </div>
                    <div className='footer_link_div'>
                        <h4>
                            Partners
                        </h4>
                        <a>
                            Swing Tech
                        </a>
                    </div>
                    <div className='footer_link_div'>
                        <h4>
                            Company
                        </h4>
                        <a>About</a>
                        <a>Press</a>
                        <a>Career</a>
                        <a>Contact</a>
                    </div>
                    <div className='footer_link_div'>
                        <h4>Social Media</h4>
                        <div className='socialmedia'>
                    <p><BsFacebook /></p> 
                        <p><BsInstagram  /></p>
                        <p><BsTwitter  /></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_below'>
                    <div className='footer_copyright'>
                    <p>{time} All rights are reserved</p>
                    </div>
                    <div className='footer_below_links'>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Cookie Declaration</p>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Footer;