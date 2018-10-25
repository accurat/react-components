import * as React from 'react';
export interface TextInputpropsType {
    className?: string;
    style?: object;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local';
    value?: string | number;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
    checkValidity?: (cond: boolean) => boolean;
    reset?: boolean;
}
export default function TextInput({ value, defaultValue, className, style, type, onChange, checkValidity, reset, disabled, ...props }: TextInputpropsType): JSX.Element;
