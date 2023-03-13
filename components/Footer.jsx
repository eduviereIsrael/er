/* eslint-disable */

import Link from "next/link";
import SecondaryBtn from './SecondaryBtn';



const footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="intro">
          <span className="large-text">IT ALL STARTS WITH A CONVERSATION</span>
          <p className="small-text">Let us know what you're looking for</p>
          <p className="small-text">Say Hi on whatsapp</p>
          <SecondaryBtn color="#fff" link="" text="Let's Chat" borderRadius="10px" />
        </div>
        <div className="links">
          <div className="menu">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/">
              <p>Listings</p>
            </Link>
            <Link href="/">
              <p>Blogs</p>
            </Link>
            <Link href="/">
              <p>Contact</p>
            </Link>
            <Link href="/">
              <p>About</p>
            </Link>
          </div>
          <hr />
          <div className="contact">
            <a href="/">IG</a>
            <a href="/">FB</a>
            <a href="/">WA</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer