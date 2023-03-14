import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const MainLayout = ({children}) => {
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