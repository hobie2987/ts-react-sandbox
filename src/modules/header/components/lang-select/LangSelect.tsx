import './LangSelect.scss';
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useConfig, useProfile } from "../../../../hooks";
import { OrderSession } from "../../../../namespaces/order-session";

export default function LangSelect() {
    const [i18n] = useConfig('i18n');
    const [lang] = useProfile('lang', i18n.default);


    const handleChange = (event: SelectChangeEvent) => {
        OrderSession.setLanguage(event.target.value);
    };

    return (
        <Select className="lang-select"
                defaultValue={i18n.default}
                value={lang}
                onChange={handleChange}
                variant="standard"
                MenuProps={{ PaperProps: { className: "lang-menu" }}}>

            {i18n.languages.map(item => (
                <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
            ))}
        </Select>
    );
}