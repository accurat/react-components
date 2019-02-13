import { InputPropsTypes, InputChangeFunction } from 'src/commons/interfaces';
export interface TextInputpropsType extends InputPropsTypes {
    className?: string;
    style?: object;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local';
    value?: string | number;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: InputChangeFunction;
    checkValidity?: (cond: boolean) => void;
    reset?: boolean;
}
export default function TextInput({ value, defaultValue, className, style, type, onChange, checkValidity, reset, disabled, ...props }: TextInputpropsType): JSX.Element;
