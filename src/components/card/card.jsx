import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ image, itemName, description, setCartItems }) => {
    
    function updateCart() {
        setCartItems(prev => {
            const itemExists = prev.find((val) => val.id === itemName);

            if (itemExists) {
                return prev.map((val) => (
                    val.id === itemName ? {...val, quantity: val.quantity + 1} : val
                ))
            }
            return [...prev, {id: itemName, itemName: itemName, quantity: 1}]
        })
    }


    return (
        <Link className="product-card" onClick={() => updateCart()}>
            <div className="product-container">
                <span className="product-image">
                    <img src={image} />
                </span>
            </div>
            <div className="product-description">
                <p>{itemName}</p>
                <p className="description-text">{description}</p>
            </div>
        </Link>
    )
}