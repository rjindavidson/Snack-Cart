import { useOutletContext } from "react-router";


export const Cart = () => {
    const [cartItems, setCartItems] = useOutletContext();

    function incrementItemTotal(id) {
        console.log(id)
        setCartItems(prev => (
            prev.map((val) => val.id === id ? { ...val, quantity: val.quantity + 1 } : val)
        ))
    }

    function decrementItemTotal(id) {
        console.log(id)
        setCartItems(prev => (
            prev.map((val) => val.id === id ? { ...val, quantity: val.quantity - 1 } : val)
        ))
    }

    function getCartItems() {
        return (
            <ul>
                {cartItems.length === 0 ?
                    <div>No items</div>
                    : cartItems.map((item) => (
                        <li key={item.id}>
                            {item.itemName} | Q: {item.quantity}
                            <button onClick={() => incrementItemTotal(item.id)}> + </button>
                            <button onClick={() => decrementItemTotal(item.id)}> - </button>
                        </li>
                    ))}
            </ul>
        )
    }
    return (
        <div>
            {getCartItems()}
        </div>
    )
}

export default Cart;