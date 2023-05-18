import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading, setLoading] = useState(true)


const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
        
          setUser(loggedUser)
          setLoading(false)
          return () =>{
              unsubscribe()
          }
      })
  },[])

  const logOut = () => {
    setLoading(true)
   return signOut(auth)
}

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        logOut,
        loading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;