import {useState} from "react";
import './OrderSummary.scss';
import { Cart } from "../../../../services";
import Button from "../button/Button";
import Price from "../price/Price";

export default function OrderSummary() {
    const [items, setItems] = useState([]);

    Cart.getItems().then((i) => {
        const _items =  Array.from(i.entries())
            .flatMap(([sku, quantity]) => ({sku, quantity}));
        setItems(_items)
    });

    return(
        <div className="OrderSummary">
            <h4>Order Summary</h4>
            {!items.length &&
                <div>
                    <div>Your cart is empty</div>
                    <div>Have an account?  Sign in to see your cart</div>
                </div>
            }

            {items.map(item => (
                <div key={item.sku} className="cart-item">
                    <div>
                        <div className="item-name">{item.sku}</div>
                        <div className="item-qty">Qty {item.quantity}</div>
                    </div>
                    <div className="item-price">
                        <Price value={1.00} />
                    </div>
                </div>
            ))}

            <div>Today's total {items.length}</div>
            <Button label="Check Out" />
        </div>
    )
}