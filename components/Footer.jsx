/* eslint-disable */

import Link from "next/link"

const footer = () => {
  return (
    <div className='footer sect-wrap'>
        <h2>
            We Don&apos;t just Design <br /> We want to see your business grow
        </h2>
        <p>
            Get a guided tour through how Throve, and find out how your business can change the way you source design forever. 
        </p>

        <Link href='/contact'>
            <p>Talk to us</p>
        </Link>
        <div className="footer-bottom">
            <div className="brand-logo">
                <img src="/logo.svg" alt="throve" />
                <span>Throve</span>
            </div>
            <div className="footer-menu">
                <a href=''>Benefits</a>
                <a href=''>Recent Works</a>
                <a href=''>Scope of Work</a>
                <a href=''>Pricing</a>
            </div>
        </div>
    </div>
  )
}

export default footer