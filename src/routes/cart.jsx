import { Navigate } from "react-router";
import './cart.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Cart = () => {
    const { userID, token } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            const getCart = await fetch(`http://localhost:5000/api/cart/getCart?user_id=${userID}`)
            const cart = await getCart.json()
            setCartItems(cart)
        }
        getCartItems()
    }, [userID])

    if (!token) {
        return <Navigate to='/sign-up' replace />
    }

    function incrementItemTotal() {

    }

    function decrementItemTotal() {

    }

    async function deleteCartItem(item_id) {
        try {
            await fetch(`http://localhost:5000/api/cart/deleteFromCart?user_id=${userID}&product_id=${item_id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            let updatedCart = cartItems.filter((item) => item.product_id !== item_id)
            setCartItems(updatedCart)
        } catch (e) {
            console.error(e)
        }
    }

    async function postCartItems() {
        let x = cartItems.map((item) => {
            return `${item.amount} ${item.name}\n`
        })
        const order = {
            content: `Order: ${x}`,
            username: 'Snack Cart',
        };
        try {
            await fetch('http://localhost:5000/api/cart/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(order)
            });
        } catch (e) {
            console.error('Error in checkout:', e);
        }
    }

    function renderCartItems() {
        return (
            <ul className="cart-list">
                {cartItems.length === 0 ?
                    <div>No items</div>
                    : cartItems.map((item) => (
                        <li key={item.location}>
                            <div className="cart-item">
                                <div>
                                    <img src={item.image} className="cart-image" />
                                </div>
                                <div>
                                    <p>{item.name} | {item.amount}</p>
                                    <button onClick={() => incrementItemTotal(item.product_id)}> + </button>
                                    <button onClick={() => decrementItemTotal(item.product_id)}> - </button>
                                    <button onClick={() => deleteCartItem(item.product_id)}>Trash</button>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        )
    }

    return (
        <div className="cart-display">
            {renderCartItems()}
            <div className="cart-summary">
                <h2 className="cart-header">Order Summary</h2>
                <div>
                    {cartItems.map((val) => (
                        <p key={val.location}>{val.name}</p>
                    ))}
                </div>
                <button onClick={() => postCartItems()}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;