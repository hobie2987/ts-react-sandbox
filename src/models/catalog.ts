import Product from "./product";

export interface Catalog {
    accessories: Map<string, Product>;
    cameras: Map<string, Product>;
    subscriptions: any;
    currency: string;
}