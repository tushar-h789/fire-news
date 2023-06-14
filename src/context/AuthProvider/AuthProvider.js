import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log('inside state change', currentUser);
        setUser(currentUser)
    })
    return unsubscribe
  }, [])

  const logOut = ()=>{
    return signOut(auth)
  }

  const authInfo = { user, providerLogin, logOut, createUser, signIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
