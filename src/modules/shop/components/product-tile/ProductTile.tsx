import {useEffect, useState} from "react";
import Button from '../button/Button';
import Quantity from '../quantity/Quantity';
import Price from "../price/Price";
import Product from "../../../../models/product";
import './ProductTile.scss';
import { Cart } from "../../../../services";


export default function ProductTile(props: { product: Product }) {
    const [selected, setSelected] = useState(false)
    const [product] = useState(props.product)

    const addToCart = (qty?: number) => Cart.add(product.sku, qty).then((items) => {
        setSelected(items.has(product.sku));
    });


    const removeFromCart = () => Cart.remove(product.sku).then((items) => {
        setSelected(items.has(product.sku));
    });

    useEffect(() => {
        Cart.getItems().then((items) => {
            // const item = items.get(product.sku);
            setSelected(items.has(product.sku));
            // initialize quantity
        })
    });


    return (
        <div className="Tile">
            <div className="title">
                <span>{product.model}</span>
            </div>

            <img src={product.urls['icon']} alt={product.model} />

            <div className="amount">
                <Quantity min={1}
                          zero={removeFromCart}
                          disabled={!selected}
                          onChange={addToCart}/>
                <Price value={product.price} />
            </div>


            <Button label={selected ? 'Selected' : 'Select'}
                    selected={selected}
                    disabled={selected}
                    action={addToCart}/>
        </div>
    );
}
