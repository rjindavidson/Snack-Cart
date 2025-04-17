import { useOutletContext } from "react-router";
import { Card } from "../components/card/card";
import './shop-page.css'

export const ShopPage = () => {
    const [cartItems, setCartItems] = useOutletContext();

    // GET Database items
    const shopItems = [
        {
            name: 'Lomo Saltado',
            description: 'Sup Noodle',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/eu8ss5pmEc-Sle9knGTasg/348s.jpg'
        },
        {
            name: 'Tsukemen',
            description: 'Ramen & Tsukemen TAO',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/LMv0YwD9i16ZcZ7pXwDxCw/348s.jpg'
        },
        {
            name: 'Pad Thai Boran',
            description: 'Hanuman Thai',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/ykgc1SORwZutX09wGGdkug/348s.jpg'
        },
        {
            name: 'Seafood Mafaldine',
            description: 'INI Ristorante',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/AsA3W49b8LXjM138QagJXg/348s.jpg'
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