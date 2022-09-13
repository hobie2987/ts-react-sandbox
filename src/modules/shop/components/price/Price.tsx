import './Price.scss';
import { useLocale, useProfile } from "../../../../hooks";

export default function Price(props: { value: number | undefined }) {
        const [locale] = useLocale();
        const [currency] = useProfile('currency', 'USD');

        function format(): string {
            return new Intl.NumberFormat(locale, {style: 'currency', currency }).format(props.value);
        }

        return (
            <span className="Price">{format()}</span>
        );
}
