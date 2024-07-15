// path src\component\card\ProductCard.jsx just for my information cuz i'm fool

import { useEffect, useState } from "react";
import "./productCard.css"
import { Link } from "react-router-dom";


function ProductCard() {

    const [menProducts, setMenProducts] = useState([]); // [[jsondata]]

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setMenProducts(data));
    }, []);

    return (
        <>
            {menProducts.map((product) => (
                <div className="card-container" key={product.id} style={{ margin: '1rem' }}>
                    <Link><div className="card" style={{ width: '18rem', background: 'white', color: 'black', gap: '2rem' }}>
                        <div className="card-img" >
                            <img src={product.image} alt="product" width='150' height='150' style={{ objectFit: 'cover ', }} />
                        </div>
                        <div className="card-body">
                            <p style={{ inlineSize: '200px', overflow: 'hidden' }}>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.content}</p>
                            {/* <p>{product.category}</p> */}
                            {/* <p>{product.description}</p> */}
                            <button>add to cart</button>
                        </div>
                    </div>
                    </Link>
                </div >
            ))
            }
        </>
    )
}

export default ProductCard