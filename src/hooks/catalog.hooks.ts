import { useEffect, useState } from "react";
import { ProductsCatalog } from "../namespaces/products-catalog";
import _ from 'lodash';
import Product from "../models/product";
import {Catalog} from "../models/catalog";

export const useCatalog = (): [Catalog] => {
    const [catalog, setCatalog] = useState(undefined);

    useEffect(() => {
        ProductsCatalog.getCatalog().subscribe((catalog) => {
            setCatalog(() => catalog)
        })
    });
    return [catalog];
}

export const useProducts = (type): [any[]] => {
    const [catalog] = useCatalog();
    const [products, setProducts] = useState(() => [])

    setProducts(() => {
        return catalog ? Object.values(_.get(catalog, type)) : []
    })

    return [products];
}