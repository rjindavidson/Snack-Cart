import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

export const SignUpPage = () => {
    const { token, setToken, setUser, setUserID } = useContext(AuthContext);

    if (token) {
        return <Navigate to='/' replace />
    }

    async function handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {};
        for (let key of formData.keys()) {
            user[key] = formData.get(key);
        }
        try {
            await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function signIn(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {};
        for (let key of formData.keys()) {
            user[key] = formData.get(key);
        }
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            setUser(data.user.name)
            setToken(data.token)
            setUserID(data.user.id)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <label htmlFor='name'>Username</label>
                <input id='name' name='name' placeholder="Name" type='text' />
                <label htmlFor='password'>Password</label>
                <input id='password' name='password' placeholder="Password" type='password' />
                <button type="submit">Sign up</button>
            </form>
            <br></br>
            <form onSubmit={signIn}>
                <label htmlFor='login-name'>Username</label>
                <input id='login-name' name='name' placeholder="Name" type='text' />
                <label htmlFor='login-password'>Password</label>
                <input id='login-password' name='password' placeholder="Password" type='password' />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignUpPage;