import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from './Backend'
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // console.log(user);
        });
        return () => {
            unsub();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

