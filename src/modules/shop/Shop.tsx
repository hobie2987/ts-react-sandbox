import {useEffect, useState} from "react";
import { ProductTile } from './components';
import { ProductsService } from "../../services";
import './Shop.scss';
import Product from "../../models/product";

export default function Shop() {
    const [cameras, setCameras] = useState([]);

    useEffect(() => {
        ProductsService.getCameras()
            .then((cameras: Product[]) => {
                setCameras(cameras);
            })
            .catch((error) => {
                console.error('Error fetching products', error);
            })
    }, [])

    return (
        <div className="Shop">
            <h1>Shopping!</h1>
            <div className="tiles">
                {cameras.map(camera => (
                    <ProductTile key={camera.id} product={camera} />
                ))}
            </div>
        </div>
    );
}
