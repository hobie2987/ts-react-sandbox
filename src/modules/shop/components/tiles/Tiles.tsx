import './Tiles.scss';
import Loading from "../loading/Loading";
import { ProductTile } from "../index";
import { useEffect, useState } from "react";
import { ProductsCatalog } from "../../../../namespaces/products-catalog";

export default function Tiles(props: { type: string }) {
    const [products, setProducts] = useState(() => []);

    useEffect(() => {
        ProductsCatalog.getCatalog().subscribe((catalog) => {
            const items = catalog[props.type]
            setProducts(() => Object.values(items))
        })
    }, [props.type])

    if (!products.length) {
        return <Loading />
    }

    return (
        <div className="tiles">
            {products.map(product => (
                <ProductTile key={product.id} product={product} />
            ))}
        </div>
    );
}
