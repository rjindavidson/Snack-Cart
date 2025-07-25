import { Link } from "react-router-dom";
import "./card.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Card = ({ shopItem }) => {
    const { userID, token } = useContext(AuthContext);

    async function postToCart() {
        const cartItem = {
            user_id: userID,
            product_id: shopItem.id,
            amount: 1,
        }
        try {
            let x = await fetch('http://localhost:5000/api/cart/addToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(cartItem)
            })
            let y = await x.json()
            console.log(y)
        } catch (e) {
            console.error('Error adding to cart:', e);
        }
    }

    async function updateCart() {
        await postToCart()
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