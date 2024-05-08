import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import PropTypes from 'prop-types'
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // 4TH 
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            console.log('current user is', currentUser)
            setLoading(false)

            // step -1 token create 
            // if user exists then issue a token
            if (currentUser) {
               
                axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true})
                    .then(res => {
                        console.log('token response',res.data)
                    })
            } 
            
            // 5th step logout 

            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                    console.log(res.data)
                })
            }


        })
        return () => {
            return unSubscribe()
        }
    }, [])




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;