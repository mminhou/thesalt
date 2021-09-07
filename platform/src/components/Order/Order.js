import React, {useEffect} from 'react';
import './Order.css'
import {useSelector} from "react-redux";

const Order = () => {
    const products = useSelector(state => state.shoppingCart);

    useEffect(() => {
        console.log(products)
    }, )

    return (
        <div>
            <div style={{backgroundColor: 'rgb(25,25,25)', height: 120}}></div>
            {products.map(product =>
                <div>
                    {product.title}
                    <img src={product.mainImage} />
                </div>
            )}
        </div>
    )
};

export default Order;