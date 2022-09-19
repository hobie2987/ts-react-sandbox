import './Filters.scss';
import { Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {useContent} from "../../../../hooks";

export default function Filters() {
    const location = useLocation();
    const [content] = useContent();
    let navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        navigate(newValue);
    };

    return (
        <div className="filters">
            <Tabs value={location.pathname} onChange={handleChange}>
                <Tab value="/shop/plans" label={ content['FILTERS.PLANS'] } />
                <Tab value="/shop/cameras" label={ content['FILTERS.CAMERAS'] } />
                <Tab value="/shop/accessories" label={ content['FILTERS.ACCESSORIES'] } />
            </Tabs>
        </div>
    );
}