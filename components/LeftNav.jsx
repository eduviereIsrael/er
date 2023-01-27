/* eslint-disable */
import React from 'react';
import Link from 'next/link';

const LeftNav = () => {
  return (
    <div className='left-nav'>
        <div className='container'>
            <img src='/logo.svg' className='logo'/>

            <div className='dashboard-links'>
                <span className='link'>
                    <Link href='/admin'>
                        <span>
                            <img src="/perfomance-icon.svg" alt="performance" />
                            <p>Perfomance</p>
                        </span>
                        
                    </Link>
                </span>
                <span className='link'>
                    <Link href=''>
                        <span>
                            <img src="/blog-icon.svg" alt="manage blogs" />
                            <p>Manage Blogs</p>
                        </span>
                    </Link>

                </span>
                <span className='link'>
                    <Link href=''>
                        <span>
                            <img src="/listings-icon.svg" alt="manage listings" />
                            <p>Manage Listings</p>
                        </span>
                    </Link>
                </span>
            </div>

            <div className='logout-btn'>
                <Link href='/admin/logout'>
                    <span>
                        <img src="/logout-icon.svg" alt="performance" />
                        <p>Logout</p>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LeftNav