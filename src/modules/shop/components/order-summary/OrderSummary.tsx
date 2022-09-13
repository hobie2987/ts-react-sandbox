import './OrderSummary.scss';
import Button from "../button/Button";
import Price from "../price/Price";
import { OrderSession } from "../../../../namespaces/order-session";
import { useCart, useSession } from "../../../../hooks";

export default function OrderSummary() {
    const [cart] = useCart();
    const [session] = useSession();

    function clear() {
        OrderSession.clearCart();
    }

    return(
        <div className="OrderSummary">
            <h4>Order Summary</h4>
            {!cart.items.length &&
                <div>
                    <div>Your cart is empty</div>
                    <div>Have an account?  Sign in to see your cart</div>
                </div>
            }

            {cart.items.map(item => (
                <div key={item.sku} className="cart-item">
                    <div>
                        <div className="item-name">{session.products[item.sku].name}</div>
                        <div className="item-qty">Qty {item.quantity}</div>
                    </div>
                    <div className="item-price">
                        <Price value={session.products[item.sku].price * item.quantity} />
                    </div>
                </div>
            ))}

            <div>Today's total {cart.items.length}</div>
            {cart.items.length &&
                <Button label="Clear Cart" action={clear} />
            }
            <Button label="Check Out" />
        </div>
    )
}