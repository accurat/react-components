/// <reference types="react" />
declare module "src/components/Button/index" {
    import * as React from 'react';
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children?: React.ReactNode;
        disabled?: boolean;
        transparent?: boolean;
        reset?: boolean;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        className?: string;
        style?: object;
        type?: 'submit' | 'reset' | 'button';
    }
    export function Button({ children, disabled, transparent, reset, className, style, onClick, type, ...props }: ButtonProps): JSX.Element;
}
declare module "src/commons/interfaces" {
    export type BooleanChangeFnType = (event: boolean) => void;
    export type InputChangeFnType = (event: React.ChangeEvent<HTMLInputElement>) => void;
    type OnChangeFunction = BooleanChangeFnType | InputChangeFnType;
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
    export const InputDefaultProps: object;
    type WeakenType<T, K extends keyof T> = {
        [P in keyof T]: P extends K ? unknown : T[P];
    };
    export type ChangelessInputProps = WeakenType<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
}
declare module "src/components/Checkbox/index" {
    import * as React from 'react';
    import { InputPropsTypes, BooleanChangeFnType, ChangelessInputProps } from "src/commons/interfaces";
    interface SVGProps {
        className?: string;
        style?: React.CSSProperties;
    }
    export interface CheckBoxArguments extends InputPropsTypes, ChangelessInputProps {
        propSvg?: React.SFC<SVGProps>;
        onChange?: BooleanChangeFnType;
    }
    export function Checkbox({ children, propSvg, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: CheckBoxArguments): JSX.Element;
}
declare module "src/components/FlexView/index" {
    import * as React from 'react';
    export interface FlexViewProps {
        children?: React.ReactNode;
        column?: boolean;
        vAlign?: 'top' | 'center' | 'bottom' | 'between' | 'around' | 'baseline' | 'stretch';
        hAlign?: 'left' | 'center' | 'right' | 'between' | 'around' | 'baseline' | 'stretch';
        grow?: boolean | number;
        shrink?: boolean | number;
        basis?: string | number;
        wrap?: boolean;
        className?: string;
        style?: object;
    }
    export function FlexView({ children, column, vAlign, hAlign, grow, shrink, basis, wrap, className, style, ...props }: FlexViewProps): JSX.Element;
}
declare module "src/components/Radio/index" {
    import { InputPropsTypes, BooleanChangeFnType, ChangelessInputProps } from "src/commons/interfaces";
    export interface RadioProps extends InputPropsTypes, ChangelessInputProps {
        onChange?: BooleanChangeFnType;
    }
    export function Radio({ children, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: RadioProps): JSX.Element;
}
declare module "src/components/Select/index" {
    import * as React from 'react';
    export interface DropDownParams {
        style: object;
    }
    export interface SelectProps {
        children?: React.ReactElement;
        className?: string;
        childrenClassName?: string;
        style?: object;
        label?: string;
        scrollable?: boolean;
        dark?: boolean;
        open?: boolean;
        disabled?: boolean;
        autoclose?: boolean;
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
        reset?: boolean;
    }
    export class Select extends React.Component<SelectProps> {
        componentDidMount(): void;
        componentWillUnmount(): void;
        static defaultProps: {
            autoclose: boolean;
        };
        state: {
            open: boolean;
        };
        container: HTMLDivElement;
        setClose: () => void;
        setOpen: () => void;
        toogleOpen: () => void;
        handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        handleOutsideClick: (event: MouseEvent | TouchEvent) => void;
        render(): JSX.Element;
    }
}
declare module "src/components/TextInput/index" {
    import * as React from 'react';
    import { InputPropsTypes, InputChangeFnType } from "src/commons/interfaces";
    export interface TextInputpropsType extends InputPropsTypes, React.InputHTMLAttributes<HTMLInputElement> {
        onChange?: InputChangeFnType;
        type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local';
        value?: string | number;
        defaultValue?: string;
        checkValidity?: (cond: boolean) => void;
    }
    export function TextInput({ value, defaultValue, className, style, type, onChange, checkValidity, reset, disabled, ...props }: TextInputpropsType): JSX.Element;
}
declare module "src/components/Toggle/index" {
    import { InputPropsTypes, BooleanChangeFnType, ChangelessInputProps } from "src/commons/interfaces";
    interface ToggleProps extends InputPropsTypes, ChangelessInputProps {
        onChange?: BooleanChangeFnType;
    }
    export function Toggle({ children, className, inputClassName, style, disabled, checked, onChange, reset, }: ToggleProps): JSX.Element;
}
declare module "src/index" {
    export { Button } from "src/components/Button/index";
    export { Checkbox } from "src/components/Checkbox/index";
    export { FlexView } from "src/components/FlexView/index";
    export { Radio } from "src/components/Radio/index";
    export { Select } from "src/components/Select/index";
    export { TextInput } from "src/components/TextInput/index";
    export { Toggle } from "src/components/Toggle/index";
}
