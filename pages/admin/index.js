import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStateContext } from '../../Context/StateContext';
import { Layout } from '../../components';
import Link from 'next/link';

const  Admin = () => {
  const { token, setToken, isLoggedIn, setIsLoggedIn} = useStateContext()
  let router = useRouter();
  function redirect() {
    router.push('/login');
  }

  useEffect(() => {
    // const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const loginStatus = sessionStorage.getItem('isLoggedIn');
    const userToken = sessionStorage.getItem('token');
    setToken(userToken);
    setIsLoggedIn(loginStatus);
    if(!isLoggedIn){
      redirect();
    }
    
  },[]);
  // implement ContextAPI to keep track of login state accross the entire application
  // Update the mongoose schema and proceed to create the dashboard ui
  
  if (isLoggedIn){
    return (
      // <div className='admin-body'>
      //   {!isLoggedIn? '' : 
          <Layout>
            <div className='admin-home-container'>
              <div className="perfomance-div">
              <h1>Performance</h1>
              <div className="perfomance-data">
                  <div className="all-time">
                      <p>All time visitors</p>
                      <span className='data'>128K</span>
                  </div>
                  <div className="monthly">
                      <p>Monthly visits</p>
                      <span className='data'>3076</span>
                  </div>
                  <div className="daily">
                      <p>Daily visits</p>
                      <span className='data'>133</span>
                  </div>
              </div>
              </div>
              <div className="manage-content">
                <div className='m-listed-properties'>
                  <h4>Manage listed properties</h4>
                  <div className='container'>
                    <div className='none'>
                      <p className='small-text'>No listed properties found</p>
                      <Link href='/admin/addlisting'>
                        <button>Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='m-published-blogs'>
                  <h4>Manage listed blogs</h4>
                  <div className='container'>
                    <div className='none'>
                      <p className='small-text'>No published blogs found</p>
                      <Link href=''>
                        <button>Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
      //   }
      // </div>
    )
}

}

export default Admin
