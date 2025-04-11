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
                <form>
                    <input className='search-bar' type='text' placeholder='Search' />
                </form>
                <div>
                    Cart: {numItems}
                </div>
            </div>
        </nav>
    )
}