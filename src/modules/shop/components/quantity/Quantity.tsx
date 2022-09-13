import React, { useState } from "react";
import './Quantity.scss';

interface QuantityProps {
    min?: number;
    max?: number;
    disabled?: boolean;
    onChange?: Function;
    value: number;
}

export default function Quantity(props: QuantityProps) {
    const [max] = useState(props.max || Infinity);
    const qty = props.value || props.min

    function inc() {
        const newQty = Math.min(qty + 1, max);
        qtyChange(newQty);
    }

    function dec() {
        const newQty = Math.max(qty - 1, 0);
        qtyChange(newQty);

    }

    function qtyChange(q: number) {
        if (q !== qty && props.onChange) {
            props.onChange(q);
        }
    }

    return (
        <div className="Quantity">
            <button className="dec"
                    disabled={props.disabled}
                    onClick={dec}>-
            </button>

            <div className="qty">{qty}</div>

            <button className="inc"
                    disabled={props.disabled || qty >= max}
                    onClick={inc}>+
            </button>
        </div>
    );
}
