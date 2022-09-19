import './Shop.scss';
import { OrderSummary } from './components';
import Filters from "./components/tabs/Filters";
import Tiles from "./components/tiles/Tiles";
import { Route, Routes } from "react-router-dom";

export default function Shop() {

    return (
        <div className="Shop">
            <h1>Buy Matterport</h1>
            <Filters></Filters>
            <div className="content">
                <Routes>
                    <Route path="/plans" element={<Tiles type="subscriptions" />} />
                    <Route path="/cameras" element={<Tiles type="cameras" />} />
                    <Route path="/accessories" element={<Tiles type="accessories" />} />
                </Routes>
                <div className="order-summary">
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
}
