import React, {createContext, useContext, useState} from 'react';
import { useRouter } from 'next/router';


const Context = createContext();

export const StateContext = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [listings, setListings] = useState([]);
    const [token, setToken] = useState('');
    const router = useRouter();

    const checkLogin = () => {
        const loggedInStatus = sessionStorage.getItem("isLoggedIn");
        setIsLoggedIn(loggedInStatus);
        if(!isLoggedIn){
            router.push('/login')
        }
    }
    

    return(
        <Context.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                listings,
                setListings,
                token,
                setToken,
                checkLogin,
            }}
            >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);