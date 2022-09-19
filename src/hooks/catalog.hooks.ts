import { useEffect, useState } from "react";
import { ProductsCatalog } from "../namespaces/products-catalog";
import _ from 'lodash';
import Product from "../models/product";
// import {Catalog} from "../models/catalog";

// export const useCatalog = (): [Catalog] => {
//     const [catalog, setCatalog] = useState(undefined);
//
//     useEffect(() => {
//         ProductsCatalog.getCatalog().subscribe((catalog) => {
//             setCatalog(() => catalog)
//         })
//     });
//     return [catalog];
// }

export const useProducts = (type): [Product[]] => {
    const [products, setProducts] = useState(() => [])

    useEffect(() => {
        ProductsCatalog.getCatalog().subscribe((catalog) => {
            setProducts(() => Object.values(_.get(catalog, type)) || [])
        })
    }, [type]);

    return [products];
}