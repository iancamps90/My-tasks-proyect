import React from 'react';
import "./BuyProduct.css";
import TShirt from '../assets/TShirt.jpg';
import { useState } from 'react';


function BuyTShirt() {

    const [quantity, setQuantity] = useState(0);

    const decrease = () => {
        setQuantity(quantity - 1);
    };

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const buy = () => {
        console.log(`${quantity} camisetas compradas`);
        
    }


    return (
    
        <div className="product-container">
            <h3 className="product-name">Compra camisetas</h3>
            <img src={TShirt} alt="TShirt image" className="img" />
            <div className="quantity">
                <button onClick={decrease}>-</button>
                <h3>{quantity}</h3>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={buy}>Comprar</button>
        </div>
        
    )
}

export default BuyTShirt;