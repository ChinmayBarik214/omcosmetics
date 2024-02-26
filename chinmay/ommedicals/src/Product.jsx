import React from 'react'
import './product.css'


function Product({id, title, image, price, alt, category}) {
    return (
    <>
        <div className="height product">
            <div className="prod-desc">
                <div className="prod-img-container">
                <img src={image} alt={alt} />
                </div>
                <h4 className="ellipses">{title}</h4>
                <span className="ellipses">{category}</span>
                <span className="ellipses">₹{price} to buy</span>
            </div>
            <div className="prod-btn-container">
                <button className="prod-btn">Add to cart</button>
            </div>
        </div>
    </>
    )
}

export default Product