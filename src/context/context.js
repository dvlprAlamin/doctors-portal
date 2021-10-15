import { createContext, useContext, useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
const userContext = createContext();

export const useMyContext = () => {
    return useContext(userContext);
}


firebaseInitialize();
export const ContextProvider = ({ children }) => {
    const [date, setDate] = useState(new Date());

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const email = loggedInUser?.email
    const auth = getAuth()

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setLoggedInUser(user)
                setLoading(false)
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const value = {
        loggedInUser,
        setLoggedInUser,
        signUp,
        login,
        googleSignIn,
        logOut,
        isAdmin,
        date,
        setDate
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}