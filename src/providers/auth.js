import { createContext, useContext, useEffect, useState } from "react";
import authApp from '../firebase.js'
import { useLoader } from "./loader.js";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const { showLoader } = useLoader();

    const value = {
        currentUser,
        register,
        login,
        logout
    }

    useEffect(() => {
        showLoader(true);
        const unsubscribe = authApp.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            showLoader(false);
        });
        return unsubscribe;
    }, []);

    function register(email, password) {
        return authApp.auth().createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return authApp.auth().signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return authApp.auth().signOut();
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : null}
        </AuthContext.Provider>
    );
}

export default AuthProvider;