import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => localStorage.getItem('user'));
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    /*
        Cookies with HTTPOnly and SameSite attribute set. Then make sure you have CORS properly
        configured and use CSRF tokens. This has been the best practice for session token storage 
        for over 20 years now.
    */

    useEffect(() => {
        if (token) { localStorage.setItem('token', token) }
        if (user) { localStorage.setItem('user', user) }
    }, [user, token]);

    return (
        <AuthContext value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext>
    )
}