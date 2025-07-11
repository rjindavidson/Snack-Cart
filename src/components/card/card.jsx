import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ shopItem, setCartItems }) => {
    function updateCart() {
        setCartItems(prev => {
            const itemExists = prev.find((val) => val.id === shopItem.id);

            if (itemExists) {
                return prev.map((val) => (
                    val.id === shopItem.name ? {...val, quantity: val.quantity + 1} : val
                ))
            }
            return [...prev, {id: shopItem.id, itemName: shopItem.name, quantity: 1, image: shopItem.image}]
        })
    }


    return (
        <Link className="product-card" onClick={() => updateCart()}>
            <div className="product-container">
                <span className="product-image">
                    <img src={shopItem.image} />
                </span>
            </div>
            <div className="product-description">
                <p>{shopItem.name}</p>
                <p className="description-text">{shopItem.location}</p>
            </div>
        </Link>
    )
}