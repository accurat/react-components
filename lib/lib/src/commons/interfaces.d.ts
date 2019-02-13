/// <reference types="react" />
export declare type BooleanChangeFnType = (event: boolean) => void;
export declare type InputChangeFnType = (event: React.ChangeEvent<HTMLInputElement>) => void;
declare type OnChangeFunction = BooleanChangeFnType | InputChangeFnType;
export interface InputPropsTypes {
    children?: React.ReactNode;
    className?: string;
    inputClassName?: string;
    style?: object;
    disabled?: boolean;
    checked?: boolean;
    onChange?: OnChangeFunction;
    reset?: boolean;
}
export declare const InputDefaultProps: object;
export {};
