import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = ({ numItems }) => {
    return (
        <nav className='main-nav'>
            <div className='nav-pair'>
                <Link to="/">Home</Link>
                <Link to="/products">Store</Link>
            </div>
            <div className='nav-pair'>
                <Link to="/sign-up">Profile</Link>
                <Link to="/cart">
                    Cart: {numItems}
                </Link>
            </div>
        </nav >
    )
}