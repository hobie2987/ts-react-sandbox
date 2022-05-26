export default interface Product {
    active: boolean;
    category: string;
    id: string;
    model: string;
    price?: string | number;
    sku?: string;
    subscriptions: string[];
    teasers: {
        bullets: string[];
        header: string;
        pricing: string;
    }
    urls: Record<string, string>;
    vendor: string;
}
