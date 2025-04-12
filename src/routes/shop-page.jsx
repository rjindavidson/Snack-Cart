import { useOutletContext } from "react-router";
import { Card } from "../components/card/card";
import './shop-page.css'

export const ShopPage = () => {
    const [cartItems, setCartItems] = useOutletContext();

    // GET Database items
    const shopItems = [
        {
            name: 'item 1',
            description: 'item 1 description',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/eu8ss5pmEc-Sle9knGTasg/348s.jpg'
        },
        {
            name: 'item 2',
            description: 'item 2 description',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/LMv0YwD9i16ZcZ7pXwDxCw/348s.jpg'
        },
        {
            name: 'item 3',
            description: 'item 3 description',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/ykgc1SORwZutX09wGGdkug/348s.jpg'
        }
    ]

    function renderShopItems() {
        return (
            <>
                {shopItems.map((val) => (
                    <Card 
                        key={val.name} itemName={val.name} description={val.description} 
                        image={val.image} cartItems={cartItems} setCartItems={setCartItems}
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