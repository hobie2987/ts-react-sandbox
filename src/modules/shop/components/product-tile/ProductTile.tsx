import { useState } from "react";
import Button from '../button/Button';
import Quantity from '../quantity/Quantity';
import Price from "../price/Price";
import Product from "../../../../models/product";
import './ProductTile.scss';


export default function ProductTile(props: { product: Product }) {
    const [selected, setSelected] = useState(false)
    const [product] = useState(props.product)

    const toggleSelected = () => {
        setSelected(!selected);
    }

    return (
        <div className="Tile">
            <div className="title">
                <span>{product.model}</span>
            </div>

            <img src={product.urls['icon']} alt={product.model} />

            <div className="amount">
                <Quantity min={1}
                          zero={toggleSelected}
                          disabled={!selected} />
                <Price value={product.price} />
            </div>


            <Button label={selected ? 'Selected' : 'Select'}
                    selected={selected}
                    action={toggleSelected}/>
        </div>
    );
}
