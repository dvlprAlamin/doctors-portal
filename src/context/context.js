import { createContext, useContext, useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";
const userContext = createContext();

export const useMyContext = () => {
    return useContext(userContext);
}


firebaseInitialize();
export const ContextProvider = ({ children }) => {
    const [date, setDate] = useState(new Date());

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isDoctor, setIsDoctor] = useState(false);
    const [loading, setLoading] = useState(true);
    const email = loggedInUser?.email;
    useEffect(() => {
        axios.post('http://localhost:5000/isDoctor', { email })
            .then(res => {
                setIsDoctor(res.data);
            })
    }, [email])
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
            } else {
                // User is signed out
            }
            setLoading(false)
        });
    }, []);

    const value = {
        loggedInUser,
        setLoggedInUser,
        signUp,
        login,
        googleSignIn,
        logOut,
        isDoctor,
        date,
        setDate
    }
    return (
        <userContext.Provider value={value}>
            {!loading && children}
        </userContext.Provider>
    )
}