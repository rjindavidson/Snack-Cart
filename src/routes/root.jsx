import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar"
import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

export const Root = () => {
    const userAuthStatus = useAuthContext();

    const getInitialState = () => {
        const cartState = localStorage.getItem('cartItems');
        return cartState ? JSON.parse(cartState) : [];
    }

    const [cartItems, setCartItems] = useState(getInitialState());


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <div>
            <Navbar numItems={cartItems.length} authStatus={userAuthStatus}/>
            <Outlet context={[cartItems, setCartItems, userAuthStatus]} />
        </div>
    )
}

export default Root;