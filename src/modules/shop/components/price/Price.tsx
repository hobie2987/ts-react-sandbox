import './Price.scss';

const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function Price(props: { value: number | undefined }) {

        return (
            <span className="Price">{USD.format(props.value)}</span>
        );
}
