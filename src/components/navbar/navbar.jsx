import { Link } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {
    const { user, token } = useContext(AuthContext);

    return (
        <nav className='main-nav'>
            <div className='nav-pair'>
                <Link to="/">Home</Link>
                <Link to="/products">Store</Link>
            </div>
            <div className='nav-pair'>
                <Link to="/sign-up">{token ? `${user}` : 'Sign In'}</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav >
    )
}