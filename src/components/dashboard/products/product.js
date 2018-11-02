import React from 'react';
import './product.css';

const Product = (props) => {
    const { product } = props;
    return(
        <div className="product">
            <img src={product.imageurl} alt="pic" className="pic" />
            <section className="text">
                <h1 className="a">{product.name}</h1>
                <h2 className="b">${product.price}</h2>
            </section>
        </div>
    )
}

export default Product;