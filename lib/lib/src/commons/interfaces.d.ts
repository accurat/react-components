/// <reference types="react" />
export interface InputPropsTypes {
    children?: React.ReactNode;
    className?: string;
    inputClassName?: string;
    style?: object;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (event: boolean) => void;
    reset?: boolean;
}
export declare const InputDefaultProps: object;
