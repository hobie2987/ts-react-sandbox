import { Shop } from "./modules";

export const routes = [
    {
        path: '/shop',
        component: Shop,
        routes: [
            {
                path: '/shop/cameras',
                component: Shop
            },
            {
                path: '/shop/accessories',
                component: Shop
            }
        ]
    },
]