import './Filters.scss';
import {Tab, Tabs} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Filters() {
    const location = useLocation();
    let navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        navigate(newValue);
    };

    return (
        <div className="filters">
            <Tabs value={location.pathname} onChange={handleChange}>
                <Tab value="/shop/plans" label="Plans" />
                <Tab value="/shop/cameras" label="Cameras" />
                <Tab value="/shop/accessories" label="Accessories" />
            </Tabs>
        </div>
    );
}