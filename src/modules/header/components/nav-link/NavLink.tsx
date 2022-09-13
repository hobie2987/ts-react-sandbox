import './NavLink.scss';
import {Link} from "@mui/material";

export default function NavLink(props: { text: string; href: string; }) {

    return (
        <Link className="nav-link" href="#" underline="none">{props.text}</Link>
    );
}