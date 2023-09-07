"use client"

import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [isComponentVisible, setComponentVisible] = useState(true)
  
    return (
      <AppContext.Provider value={{ isComponentVisible, setComponentVisible}}>
        {children}
      </AppContext.Provider>
    );
  }