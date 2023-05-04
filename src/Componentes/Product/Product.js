import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    // console.log(props);
 const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
             <div>
                <img src= {img} alt=""/>
             </div>
            <div>
            <h4 className='product-Name'>{name}</h4>
            {/* <br/> */}
            <p>By : {seller}</p>
            {/* <br/> */}
            <p>{price} $ </p>
            <p><small>only {stock} left in stock-oder soon</small></p>
           <button type="" className='main-btn' onClick={()=>props.handleAddproduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;