import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({image, itemName, description}) => {
    return (
        <Link className="product-card">
            <div className="product-container">
                <span className="product-image">
                    <img src={image}/>
                </span>
            </div>
            <div className="product-description">
                <p>{itemName}</p>
                <p className="description-text">{description}</p>
            </div>
        </Link>
    )
}