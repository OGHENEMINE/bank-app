import React, { useState, createContext } from "react";

export const ToggleContext = createContext() 

export const ToggleProvider = ({children}) => {
    const [nav, setNav] = useState(false);
    return(
        <ToggleContext.Provider value={[nav, setNav]}>
          {children}
        </ToggleContext.Provider>
    );
}