import React from 'react'
import { createContext, useState } from 'react'
export const UserContext= createContext(null);
const UserProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(null);
    
    return (
        <UserContext.Provider value={{userLogged, setUserLogged}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider