import './OrderSummary.scss';
import Button from "../button/Button";
import Price from "../price/Price";
import { OrderSession } from "../../../../namespaces/order-session";
import { useCart, useContent, useSession } from "../../../../hooks";
import {ExpandMore, ShoppingCart} from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function OrderSummary() {
    const [content] = useContent();
    const [cart] = useCart();
    const [session] = useSession();

    function clear() {
        OrderSession.clearCart();
    }

    return(
        <Accordion className="OrderSummary" defaultExpanded={true} >

            <AccordionSummary expandIcon={<ExpandMore />} >
                <ShoppingCart />
                <span>{ content['ORDER_SUMMARY.HEADING'] }</span>
            </AccordionSummary>

            <AccordionDetails>
                {cart.items.length < 1 &&
                    <div>
                        <div>{ content['ORDER_SUMMARY.EMPTY_CART'] }</div>
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

                <div className="cart-item">
                    <div className="item-name">{ content["ORDER_SUMMARY.TODAYS_TOTAL"] }</div>
                    <div className="item-price">
                        <Price value={cart.total} />
                    </div>
                </div>

                {cart.items.length > 0 &&
                <Button label={ content["ORDER_SUMMARY.BUTTON.CLEAR_CART"] } action={clear} />
                }

                <Button label={ content["ORDER_SUMMARY.BUTTON.CHECK_OUT"] } />
            </AccordionDetails>
        </Accordion>

    )
}