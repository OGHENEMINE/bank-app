import React, { useState, createContext } from "react";

export const AuthContext = createContext(null) 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);
    return(
        <AuthContext.Provider value={[user, setUser]}>
          {children}
        </AuthContext.Provider>
    );
}