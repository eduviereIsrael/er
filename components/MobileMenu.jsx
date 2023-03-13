import Link from 'next/link';
import React from 'react';
import { useStateContext } from '../Context/StateContext';
import { motion } from 'framer-motion';
import MobileMenuLinksCard from './MobileMenuLinksCard';
import {MenuLinks} from '../data/mobileMenuLinks';


const MobileMenu = () => {
//   console.log(MenuLinks)
  const { activeNavbar, setActiveNavbar } = useStateContext();

//   const MobileMenuLinks = (props) => {
//     return (
//         <Link href={props.link}>
//             <p>{props.text}</p>
//         </Link>
//     )
//   }
  
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className='mobile-menu'>
        <div className="close" onClick={() => setActiveNavbar(!activeNavbar)}>
            <div className='first'></div>
            <div className='second'></div>
        </div>
        <div className='container'>
            <div className="links">
                {MenuLinks.map((link, i) => (
                    <MobileMenuLinksCard key={i} link={link.link} text={link.item} />
                ))}
               
            </div>
        </div>
    </motion.div>
  )
}

export default MobileMenu