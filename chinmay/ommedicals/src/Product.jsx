import React from 'react'
import './Product.css'


function Product({id, title, image, price, alt, category}) {
    return (
    <>
        <div class="height product">
            <div class="prod-desc">
                <div class="prod-img-container">
                <img src={image} />
                </div>
                <h4 class="ellipses">{title}</h4>
                <span class="ellipses">{category}</span>
                <span class="ellipses">₹{price} to buy</span>
            </div>
            <div class="prod-btn-container">
                <button class="prod-btn">Add to cart</button>
            </div>
        </div>
    </>
    )
}

export default Product