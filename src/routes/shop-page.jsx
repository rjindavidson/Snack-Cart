import { useOutletContext } from "react-router";
import { Card } from "../components/card/card";
import './shop-page.css'
import { useEffect, useState } from "react";

export const ShopPage = () => {
    const [_, setCartItems] = useOutletContext();
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            const fetchProducts = await fetch('http://localhost:5000/api/products/all')
            const products = await fetchProducts.json()
            setShopItems(products)
        }
        getAllProducts()
    }, [])


    function renderShopItems() {
        return (
            <>
                {shopItems.map((val) => (
                    <Card
                        key={val.id} shopItem={val} setCartItems={setCartItems}
                    />
                ))}
            </>
        )
    }


    return (
        <div>
            <div className="products">
                {/* TODO: Add in sidebar with filters */}
                <h2>Items</h2>
                <div className="product-grid">
                    {renderShopItems()}
                </div>
            </div>
        </div>
    )
}

export default ShopPage;