import React, { createContext, useContext, useState } from 'react'

export const Moviectx = createContext(
    {
        wachlist : [],
        currentMovie : null

    }
);

export const MovieContextProvider = ({children})=>{

    const [currentMovie,setcurrentMovie] = useState()
    const [wachlist,setwachlist] = useState([])
    return(<Moviectx.Provider value={
        {
            currentMovie:currentMovie,
            setcurrentMovie:setcurrentMovie,
            wachlist:wachlist,
            setwachlist:setwachlist
        }
    }>
        {children}
    </Moviectx.Provider>)
}