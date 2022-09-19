// react
import { useEffect, useState } from "react";
// namespaces
import { OrderSession } from "../../../../namespaces/order-session";
// models
import Product from "../../../../models/product";
// components
import './ProductTile.scss';
import Button from '../button/Button';
import Quantity from '../quantity/Quantity';
import Price from "../price/Price";
import { Cart } from "../../../../models/session";
import { useCart, useContent } from "../../../../hooks";

export default function ProductTile(props: { product: Product }) {
    const [content] = useContent();
    const [product]  = useState(() => props.product);
    const [limit] = useState(() => product.qty_limit === -1 ? Infinity : product.qty_limit);
    const [selected, setSelected] = useState(() => false)
    const [quantity, setQuantity] = useState(() => 0);
    const [cart] = useCart();

    useEffect(() => {
        updateState(cart)
    })

    function updateQuantity(qty?: number) {
        OrderSession.addItem(product.sku, qty).then(updateState);
    }

    function updateState(cart: Cart) {
        const item = cart.items.find(i => i.sku === product.sku)
        setSelected(() => !!item);
        setQuantity(() => item?.quantity || 0);
    }

    return (
        <div className="Tile">
            <div className="title">
                <span>{`${product.vendor}  ${product.model}`}</span>
            </div>

            <img src={product.urls?.icon} alt={product.model} />

            <div className="amount">
                <Quantity value={quantity}
                          min={1}
                          max={limit}
                          disabled={!selected}
                          onChange={updateQuantity}/>
                <Price value={product.price} />
            </div>


            <Button label={selected ? content['BUTTON.SELECTED'] : content['BUTTON.SELECT']}
                    selected={selected}
                    disabled={selected}
                    action={updateQuantity}/>
        </div>
    );
}
