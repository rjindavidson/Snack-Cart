import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuthContext() {
    const { token } = useContext(AuthContext);
    const [auth, setAuth] = useState();

    useEffect(() => {
        async function checkAuth(token) {
            try {
                const authRes = await fetch('http://localhost:5000/api/users/validate-user',
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );
                const authStatus = await authRes.json();
                setAuth(authStatus)
            } catch (e) {
                console.error(e.message)
                return false;
            }
        }

        checkAuth(token)
    }, [token])


    return auth;
}