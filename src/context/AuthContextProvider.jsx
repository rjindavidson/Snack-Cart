import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token)
        }
    }, [token]);

    return (
        <AuthContext value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext>
    )
}