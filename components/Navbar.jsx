/* eslint-disable */


import {useState, useEffect} from 'react';
import Link from 'next/link';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';
import { motion } from 'framer-motion';
import { useStateContext } from '../Context/StateContext';

const Navbar = () => {

  
  const [navClick, setNavClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const { activeNavbar, setActiveNavbar } = useStateContext();

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

                    <div className='hambuger-menu' onClick={() => setActiveNavbar(!activeNavbar)}>
                        <div className='top'></div>
                        <div className='middle'></div>
                        <div className='bottom'></div>
                    </div>

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
    </>
    
  )
}

export default Navbar