import React from 'react';
import "./BuyProduct.css";
import TShirt from '../assets/TShirt.jpg';


function BuyTShirt(props) {

    const { quantity, decrease, increase } = props;

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