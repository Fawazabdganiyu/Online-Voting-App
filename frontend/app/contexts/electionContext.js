"use client";

import { createContext, useState, useContext } from "react";


const ElectionContext = createContext();

export const ElectionProvider = ({ children }) => {
    const [election, setElection] = useState({})

    return (
        <ElectionContext.Provider value={{election, setElection}}>
            {children}
        </ElectionContext.Provider>
    )
}

export const useElection = () => useContext(ElectionContext);
