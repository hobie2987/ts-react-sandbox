import './Tiles.scss';
import Loading from "../loading/Loading";
import { ProductTile } from "../index";
import { useProducts } from "../../../../hooks";

export default function Tiles(props: { type: string }) {
    const { type } = props;
    const [products] = useProducts(type);

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
