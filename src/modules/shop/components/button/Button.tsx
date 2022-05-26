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
        <div className={ props.selected ? 'Button selected' : 'Button' } onClick={clicked}>
            {props.label}
        </div>
    );
}
