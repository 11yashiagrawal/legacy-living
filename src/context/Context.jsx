'use client';
import { createContext, useState, useContext } from "react";

export const UserContext=createContext();

export function UserProvider({children},{children:ReactNode}){
    const [formOpen, setFormOpen]=useState(false);

    if (!children) {
        console.error("UserProvider: 'children' is undefined!");
    }

    return (
        <UserContext.Provider value={{ formOpen, setFormOpen }}>
          {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);