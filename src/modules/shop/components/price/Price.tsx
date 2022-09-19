import './Price.scss';
import { useLocale, useProfile } from "../../../../hooks";

export default function Price(props: { value: string | number | undefined }) {
        const [locale] = useLocale();
        const [currency] = useProfile('currency', 'USD');

        function format(): string {
            return new Intl.NumberFormat(locale, {style: 'currency', currency }).format(Number(props.value));
        }

        return (
            <span className="Price">{format()}</span>
        );
}
