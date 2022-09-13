import './Header.scss';
import { Button, Divider } from "@mui/material";
import NavLink from "./components/nav-link/NavLink";
import LangSelect from "./components/lang-select/LangSelect";

export default function Header() {

    return (
        <div className="mp-header">
            <div className="top-nav">
                <div className="top-nav-links">
                    <NavLink text="contact us" href="#"/>
                    <LangSelect></LangSelect>
                    <NavLink text="sign in" href="#"/>
                </div>
            </div>
            <Divider></Divider>
            <div className="bottom-nav">
                <div className="logo"></div>
                <Button className="get-started" variant="contained">Get Started Free</Button>
            </div>
        </div>
    );
}
