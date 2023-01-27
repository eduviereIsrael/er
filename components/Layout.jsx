import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Layout = ({children}) => {
  return (
    <div className='admin-section-layout'>
        <LeftNav />
        {children}
        <RightNav />
    </div>
  )
}

export default Layout