import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
    <div style={{width: '100%'}}>
        <Navbar/>
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout