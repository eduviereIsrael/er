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
          <SecondaryBtn color="#fff" link="" text="Let's Chat" />
        </div>
      </div>
    </div>
  )
}

export default footer