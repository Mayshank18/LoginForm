import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [account,setAccount]=useState();
    const [loggedIn,setLoggedIn]=useState(false);
    return (
        <LoginContext.Provider value={{
            account,
            setAccount,
            loggedIn,
            setLoggedIn
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;