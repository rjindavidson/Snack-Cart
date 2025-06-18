import Button from '../components/button/button';
import './home.css';

export const Home = () => {
    return (
        <div className="home">
            <h1>Home Page</h1>
            <p className="description home-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci minus laboriosam voluptatum quae molestias facere, nemo, earum minima, alias id ea consequuntur esse vel aperiam incidunt ipsa tenetur similique. Illo.</p>
            <Button path="products">
                Shop
            </Button>
        </div>
    )
}

export default Home;