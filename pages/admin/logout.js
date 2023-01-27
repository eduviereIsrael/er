import React, {useEffect} from 'react';
import Link from 'next/link';
import { useStateContext } from '../../Context/StateContext';

const Logout = () => {
  const {setIsLoggedIn} = useStateContext();
  useEffect(() => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  }, []);
  
  return (
    <div>
        <h1>You have been logged out</h1>
        <Link href="/login">Login</Link>
    </div>
  );
}

export default Logout