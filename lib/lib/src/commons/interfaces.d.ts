/// <reference types="react" />
export declare type BooleanChangeFunction = (event: boolean) => void;
export declare type InputChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;
declare type OnChangeFunction = BooleanChangeFunction | InputChangeFunction;
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
