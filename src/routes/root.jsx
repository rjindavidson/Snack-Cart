import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar"
import { useEffect, useState } from "react";

export const Root = () => {
    const getInitialState = () => {
        const cartState = localStorage.getItem('cartItems');
        return cartState ? [JSON.parse(cartState)] : [];
    }
    
    const [cartItems, setCartItems] = useState(getInitialState());


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <div>
            <Navbar numItems={cartItems.length} />
            <Outlet context={[cartItems, setCartItems]}/>
        </div>
    )
}

export default Root;