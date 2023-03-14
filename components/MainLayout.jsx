import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { useStateContext } from '../Context/StateContext';

const MainLayout = ({children}) => {
  const {activeNavbar} = useStateContext();
  return (
    <div style={{width: '100%'}}>
      {activeNavbar? <MobileMenu/> : '' }

        <Navbar/>
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout