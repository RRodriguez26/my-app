import React from 'react';
import Alert from '../Alert/Alert';
import './CartSuccess.css';

export default function CartSuccess() {
    return(
        <Alert title="Added to cart" type="success">
            <div classname="cart-success-wrapper">
                <h2>
                    You have 3 items:
                </h2>
                <div classname="item">
                    <div>Fast and the furious</div>
                    <div>Quantity: 1 </div>
                </div>
                <div classname="item">
                    <div>Black Widdow</div>
                    <div>Quanttiy: 3</div>
                </div>
            </div>
        </Alert>
        )
}