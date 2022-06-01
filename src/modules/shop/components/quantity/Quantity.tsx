import React, { useState } from "react";
import './Quantity.scss';

interface QuantityProps {
    min?: number;
    max?: number;
    disabled?: boolean;
    zero?: Function;
    onChange?: Function;
}

export default function Quantity(props: QuantityProps) {
    const [min] = useState(props.min || 0);
    const [max] = useState(props.max || Infinity);
    const [qty, setQty] = useState(min || 0);

    function inc() {
        const newQty = (qty + 1) > max ? max : qty + 1;
        setQty(newQty);
        qtyChange(newQty);
    }

    function dec() {
        const newQty = (qty - 1) < min ? min : (qty - 1)
        setQty(newQty)
        if (qty - 1 === 0 && props.zero) {
            props?.zero();
        } else {
            qtyChange(newQty);
        }
    }

    function qtyChange(q: number) {
        if (props.onChange) {
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
