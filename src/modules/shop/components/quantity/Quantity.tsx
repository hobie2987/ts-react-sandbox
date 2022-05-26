import React, { useState } from "react";
import './Quantity.scss';

interface QuantityProps {
    min?: number;
    max?: number;
    disabled?: boolean;
    zero?: Function;
}

export default function Quantity(props: QuantityProps) {
    const [min] = useState(props.min || 0);
    const [max] = useState(props.max || Infinity);
    const [qty, setQty] = useState(min || 0);

    function inc() {
        setQty((qty + 1) > max ? max : qty + 1);
    }

    function dec() {
        const _qty = qty - 1;
        setQty(_qty < min ? min : _qty)
        if (_qty === 0 && props.zero) {
            props.zero();
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
