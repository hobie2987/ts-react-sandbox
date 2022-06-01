import { CART_ITEMS } from '../models/api';
import { Session } from "./session";
import { Https } from "./https";

export namespace Cart {

    const items = new Map<string, number>();

    function initialize() {
        Session.initialize().then((data: any) => {
            data.cart.items.forEach((item) => {
                items.set(item.sku, item.quantity)
            })
        });
    }


    /**
     * Posts the sku/quantity to the cart/items endpoint
     * @param sku
     * @param quantity
     */
    export async function add(sku: string, quantity = 1): Promise<any> {
        try {
            const data: any = await Https.post(CART_ITEMS, { sku, quantity });
            items.set(data.sku, data.quantity);
        } catch (err) {
            console.log(err);
        }
        return items;
    }

    /**
     * Posts the sku with a zero quantity to the cart/items endpoint
     * @param sku
     */
    export async function remove(sku: string): Promise<any> {
        try {
            const data: any = await Https.post(CART_ITEMS, { sku, quantity: 0 });
            items.delete(data.sku);
        } catch (err) {
            console.log(err);
        }
        return items;
    }

    /**
     * Removes all items from cart
     */
    export async function empty(): Promise<any> {
        items.clear();
        return items;
    }

    /**
     * Returns a list of items currently in the cart
     */
    export async function getItems(): Promise<any> {
        // try {
        //     const data: any = await axios.get(CART);
        //     return data.items || [];
        // } catch (err) {
        //     console.log(err);
        // }
        return items;
    }

    initialize();
}
