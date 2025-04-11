import { Link } from 'react-router-dom';
import './button.css';

export const Button = ({path, children}) => {
    return (
        <Link to={`/${path}`} className='button'>
            {children}
        </Link>
    )
}

export default Button;