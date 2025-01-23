import './input.scss';
import { ChangeEventHandler, FC, HTMLInputTypeAttribute, ReactNode } from 'react';

interface InputProps {
    placeholder: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({
    onChange,
    type,
    leftElement,
    rightElement,
    value,
    placeholder
}) => {
    return (
        <div className="input">
            {leftElement && leftElement}
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            {rightElement && rightElement}
        </div>
    );
};

Input.displayName = 'Input';

export default Input;
