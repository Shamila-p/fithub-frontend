import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';

function Footer() {
  return (
    <div className='footer-main'>
        <div className="footer-head">
        <h3>Fithub</h3>
        </div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>Workouts</li>
                <li>Terms and Service</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-icons">
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
        </div>
        <div className="right-reserve">
            <p style={{marginBottom:"15px"}}>@2023 <span>Fithub</span>. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer