import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase.config';

// import useAxiosPublic from '../Hook/useAxiosPublic';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('');
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic()

    // create user 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // updateUserProfile 

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // googleSignIn 

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // logOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // state change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // if (currentUser) {
            //     axiosPublic.post('/jwt', { email: currentUser.email })
            //         .then(data => {
            //             // console.log(data.data.token)
            //             localStorage.setItem('access-token', data.data.token)
            //             setLoading(false)
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            //     setLoading(false);
            // }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        searchValue,
        setSearchValue


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;