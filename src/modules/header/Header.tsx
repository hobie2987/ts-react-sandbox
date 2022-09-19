import './Header.scss';
import { Button, Divider } from "@mui/material";
import NavLink from "./components/nav-link/NavLink";
import LangSelect from "./components/lang-select/LangSelect";
import {useContent} from "../../hooks";

export default function Header() {
    const [content] = useContent();

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
                <Button className="get-started" variant="contained">{ content['HEADER.GET_STARTED_FREE'] }</Button>
            </div>
        </div>
    );
}
