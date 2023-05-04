import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPeice = cart.reduce((total ,prd)=> total + prd.price,0);
    let totalPeice = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPeice = totalPeice + product.price;        
    }

    let shipping = 0;
    if(totalPeice > 40){
        shipping = 0;
    }
    else if (totalPeice > 20){
        shipping = 5.5;
    }

    const tax = (totalPeice / 5).toFixed(2);
    const texNum = Number.tax;
    
    return (
        <div>
            <h3>Oder Summmery </h3>
            <h4>Items Odered : {cart.length}</h4>
            <h5>Total Price : {totalPeice + shipping + tax}</h5>
            <h5>Total shipping : {shipping }</h5>
            <h5>Total tax : {tax}</h5>
        </div>
    );
};

export default Cart;