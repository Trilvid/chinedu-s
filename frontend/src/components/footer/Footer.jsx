import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="quicklinks-container">
            <div className="copyright-container">
                <div className="copyright-txt">
                    <p>  &copy; 2023 copyright, all rights reserved </p>
                </div>
                <div className="policy-txt">
                    <Link to="/policy">privacy policy</Link>
                    <Link to="/policy">Terms and condition</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer