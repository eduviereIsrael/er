/* eslint-disable */


import {useState, useEffect} from 'react';
import Link from 'next/link';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';

const Navbar = () => {

  
  const [navClick, setNavClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        // alert('hello')

        if(window.scrollY > 0){
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

  }, [])
  
  return (
    <>
        <div className='header'>
            <div className="container">
                <div className="upper-part">
                    
                    <Link href='/'>
                        <img src='/logo.svg' className='logo'  alt='Ephrael Realty Logo'/>
                    </Link>

                    <div className="nav-cta">
                        <PrimaryBtn text="Chat With Us" link='/' img='/whatsapp-icon.svg' />
                        <SecondaryBtn text="Call Now" link='/' img='/phone-icon.svg' />
                    </div>
                </div>
                <div className="lower-part">
                    <span><Link href='/'><p>Home</p></Link></span>
                    <span><Link href='/'><p>Listings</p></Link></span>
                    <span><Link href='/'><p>Blogs</p></Link></span>
                    <span><Link href='/'><p>Contact</p></Link></span>
                </div>
                <div className="lower-part"></div>
            </div>
        </div>
        <div className={navClick? "mob-menu-div menu-show": "mob-menu-div "}>
            <div className="mob-menu-div-cont">
                <a href=''>Benefits</a>
                <a href=''>Recent Works</a>
                <a href=''>Scope of Work</a>
                <a href=''>Pricing</a>
                <a href=''>FAQs</a>
            </div>
        </div>
    </>
    
  )
}

export default Navbar