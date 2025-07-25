import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => localStorage.getItem('user'));
    const [userID, setUserID] = useState(() => localStorage.getItem('userID'));
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    /*
        Cookies with HTTPOnly and SameSite attribute set. Then make sure you have CORS properly
        configured and use CSRF tokens. This has been the best practice for session token storage 
        for over 20 years now.
    */

    useEffect(() => {
        if (token) { localStorage.setItem('token', token) }
        if (user) { localStorage.setItem('user', user) }
        if (userID) { localStorage.setItem('userID', userID) }
    }, [user, token, userID]);

    return (
        <AuthContext value={{ token, setToken, user, setUser, userID, setUserID }}>
            {children}
        </AuthContext>
    )
}