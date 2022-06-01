import './Shop.scss';
import { Loading, ProductTile, OrderSummary } from './components';
import { CATALOG } from "../../models/api";
import { GET } from "../../services";
import useSWR from 'swr';
import Product from "../../models/product";

export default function Shop() {
    const { data, error } = useSWR(CATALOG, GET)
    const cameras: Product[] = data?.cameras ? Object.values(data.cameras) : [];

    if (error) {
        return <div>Oops, something broke</div>
    }

    if (!cameras.length) {
        return <Loading />
    }

    return (
        <div className="Shop">
            <h1>Buy Matterport</h1>
            <div className="content">
                <div className="tiles">
                    {cameras.map(camera => (
                        <ProductTile key={camera.id} product={camera} />
                    ))}
                </div>
                <OrderSummary />
            </div>
        </div>
    );
}
