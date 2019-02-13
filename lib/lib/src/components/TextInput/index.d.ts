import { InputPropsTypes, InputChangeFnType } from 'src/commons/interfaces';
export interface TextInputpropsType extends InputPropsTypes {
    onChange?: InputChangeFnType;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local';
    value?: string | number;
    defaultValue?: string;
    checkValidity?: (cond: boolean) => void;
}
export default function TextInput({ value, defaultValue, className, style, type, onChange, checkValidity, reset, disabled, ...props }: TextInputpropsType): JSX.Element;
