import './OrderSummary.scss';
import Button from "../button/Button";
import Price from "../price/Price";
import { OrderSession } from "../../../../namespaces/order-session";
import { useCart, useContent, useSession } from "../../../../hooks";
import { Close, ExpandMore, ShoppingCart } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Badge, Divider, IconButton } from "@mui/material";

export default function OrderSummary(props: { onExpandChange: Function }) {
    const [content] = useContent();
    const [cart] = useCart();
    const [session] = useSession();
    const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

    function clear() {
        OrderSession.clearCart();
    }

    function removeItem(sku: string): void {
        OrderSession.removeItem(sku);
    }

    function onChange(event, expanded): void {
        props.onExpandChange(expanded);
    }

    return(
        <Accordion className="OrderSummary" defaultExpanded={true} onChange={onChange}>

            <AccordionSummary expandIcon={<ExpandMore />} >
                <Badge color="primary"
                    badgeContent={itemCount}>
                    <ShoppingCart />
                </Badge>

                <span>{ content['ORDER_SUMMARY.HEADING'] }</span>
            </AccordionSummary>

            <AccordionDetails>
                {cart.items.length < 1 &&
                    <div className="empty-cart">{ content['ORDER_SUMMARY.EMPTY_CART'] }</div>
                }

                {cart.items.map(item => (
                    <div key={item.sku} className="cart-item">
                        <div className="item-desc">
                            <div className="item-name">{session.products[item.sku].name}</div>
                            <div className="item-price">
                                <Price value={session.products[item.sku].price * item.quantity} />
                            </div>
                            <IconButton className="item-remove" onClick={() => removeItem(item.sku)}>
                                <Close></Close>
                            </IconButton>
                        </div>
                        <div className="item-qty">Qty {item.quantity}</div>
                    </div>
                ))}

                <Divider></Divider>

                <div className="cart-item">
                    <div className="item-desc">
                        <div className="item-name">{ content["ORDER_SUMMARY.TODAYS_TOTAL"] }</div>
                        <div className="item-price">
                            <Price value={cart.camera_total} />
                        </div>
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