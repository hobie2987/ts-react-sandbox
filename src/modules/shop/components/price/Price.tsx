import './Price.scss';

export default function Price(props: { value: string | number | undefined }) {
    if(props.value)
        return (
            <span className="Price">$ {props.value}</span>
        );
}
