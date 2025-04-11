import Button from "../button/button"

export const ImageCarousel = ({ images }) => {


    return (
        <div>
            {images.map(({ src }) => (
                <p>{src}</p>
            ))}
        </div>
    )
}