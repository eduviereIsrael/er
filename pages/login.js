import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useStateContext } from '../Context/StateContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const {setIsLoggedIn, isLoggedIn, setToken} = useStateContext();

  const router = useRouter()


  function redirect() {
    router.push('/admin')
  }

  const handleLogin = async(e) => {

    e.preventDefault()

    // const value = sessionStorage.getItem("item_key")
    let data = {
      email,
      password
    }
    // toast(value)
    await axios.post("/.netlify/functions/server/login", data)
    .then(res => {
      console.log(res)
      // toast(res.data.message)
      if (res.data.auth){
        // setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("token", res.data.token);
        // setToken(res.data.token)
        redirect()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  
  useEffect(() => {
    isLoggedIn && redirect();
    
  },[])
  
  return (
    <div className='login'>
      <Head>
        <meta name="robots" content="noindex"/>
      </Head>
      <div className='container'>
        <div className='bg'></div>
        <div className='login-info'>
          <h2>Welcome to ER website&apos;s Dashboard</h2>
          <h4>Log in to continue</h4>
          <form action='#'>
          <p className="input-container">
              <label htmlFor="email" className="input-label">Email</label>
              <input autoComplete="email" className="input-field" id="email" name="email" placeholder="Enter your email" type="text" onChange={(e) => {
                setEmail(e.target.value)
              }}/>
          </p>

          <p className="input-container">
              <label htmlFor="password" className="input-label">Password</label>
              <input autoComplete="email" className="input-field" id="password" name="password" placeholder="Enter your password" type="password" onChange={(e) => {
                setPassword(e.target.value)
              }}/>
          </p>

          <button onClick={handleLogin}>Log In</button>
          {loginStatus && <h2>Logged in</h2>}
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Login