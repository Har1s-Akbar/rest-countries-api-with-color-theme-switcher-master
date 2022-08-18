import React, { useContext, useState } from "react";

export const AppContext = React.createContext();


export const ContextProvider = ({children}) => {

    const [Dark, setDark] = useState(false)

    const toggle = () => {
        if(Dark){
            setDark(false)
        }
        if(!Dark){
            setDark(true)
        }
    }

    return <AppContext.Provider value={{Dark, setDark, toggle}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () =>{
    return useContext(AppContext)
}