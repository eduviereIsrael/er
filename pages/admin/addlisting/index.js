import React, {useEffect} from 'react';
import { useStateContext } from '../../../Context/StateContext';
import { Layout } from '../../../components';

const AddListing = () => {
  const {isLoggedIn, checkLogin} = useStateContext();
  useEffect(() => {
    checkLogin();
  }, []);
  
  if(isLoggedIn){
    return (
      <Layout>
        <div>Add listing</div>
      </Layout>
    );
  }
  
}

export default AddListing