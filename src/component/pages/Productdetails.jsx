// path src\component\pages\ProductDetail.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${product.title} to cart`);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div style={{ padding: '2rem' }}>
            <img src={product.image} alt={product.title} width='300' style={{ objectFit: 'cover' }} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <div>
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
                </label>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
