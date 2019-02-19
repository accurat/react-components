/// <reference types="react" />
export declare type BooleanChangeFnType = (event: boolean) => void;
export declare type InputChangeFnType = (event: React.ChangeEvent<HTMLInputElement>) => void;
declare type OnChangeFunction = BooleanChangeFnType | InputChangeFnType;
export interface InputPropsTypes {
    children?: React.ReactNode;
    className?: string;
    inputClassName?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    checked?: boolean;
    onChange?: OnChangeFunction;
    reset?: boolean;
}
export declare const InputDefaultProps: object;
declare type WeakenType<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? any : T[P];
};
export declare type ChangelessInputProps = WeakenType<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
export {};
