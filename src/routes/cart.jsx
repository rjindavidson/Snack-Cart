import { useOutletContext } from "react-router";
import './cart.css';


export const Cart = () => {
    const [cartItems, setCartItems] = useOutletContext();

    function incrementItemTotal(id) {
        setCartItems(prev => (
            prev.map((val) => val.id === id ? { ...val, quantity: val.quantity + 1 } : val)
        ))
    }

    function decrementItemTotal(id) {
        setCartItems(prev => (
            prev.map((val) => (val.id === id && val.quantity !== 1) ? { ...val, quantity: val.quantity - 1 } : val)
        ))
    }

    function deleteCartItem(id) {
        setCartItems(prev => prev.filter((val) => val.id !== id))
    }

    function getCartItems() {
        return (
            <ul className="cart-list">
                {cartItems.length === 0 ?
                    <div>No items</div>
                    : cartItems.map((item) => (
                        <li key={item.id}>
                            <div className="cart-item">
                                <div>
                                    <img src={item.image} className="cart-image" />
                                </div>
                                <div>
                                    <p>{item.itemName} | {item.quantity}</p>
                                    <button onClick={() => incrementItemTotal(item.id)}> + </button>
                                    <button onClick={() => decrementItemTotal(item.id)}> - </button>
                                    <button onClick={() => deleteCartItem(item.id)}>Trash</button>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        )
    }
    return (
        <div className="cart-display">
            {getCartItems()}
            <div className="cart-summary">
                <h2>Order Summary</h2>
                {cartItems.map((val) => (
                    <p>{val.itemName}</p>
                ))}
            </div>
        </div>
    )
}

export default Cart;