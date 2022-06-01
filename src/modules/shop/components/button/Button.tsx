import './Button.scss';

interface ButtonProps {
    label: string;
    selected?: boolean;
    action?: Function;
    disabled?: boolean
}

export default function Button(props: ButtonProps) {

    function clicked() {
        if (props.action) props.action();
    }

    return (
        <button className={ props.selected ? 'Button selected' : 'Button' }
            disabled={props.disabled}
            onClick={clicked}>
            {props.label}
        </button>
    );
}
