/// <reference types="react" />
declare module "src/components/Button/index" {
    import * as React from 'react';
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children?: React.ReactNode;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        className?: string;
        style?: object;
    }
    export function Button({ children, className, style, onClick, ...props }: ButtonProps): JSX.Element;
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
        customSvg?: React.SFC<SVGProps>;
        onChange?: BooleanChangeFnType;
    }
    export function Checkbox({ children, customSvg, className, inputClassName, style, checked, onChange, ...props }: CheckBoxArguments): JSX.Element;
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
    export function Radio({ children, className, inputClassName, style, checked, onChange, reset, ...props }: RadioProps): JSX.Element;
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
    }
    export class Select extends React.Component<SelectProps> {
        componentDidMount(): void;
        componentWillUnmount(): void;
        static defaultProps: {
            autoclose: boolean;
            childrenClassName: string;
            scrollable: boolean;
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
    export interface TextInputPropsType extends InputPropsTypes, React.InputHTMLAttributes<HTMLInputElement> {
        onChange?: InputChangeFnType;
        checkValidity?: (cond: boolean) => void;
    }
    export function TextInput({ className, style, type, onChange, checkValidity, disabled, ...props }: TextInputPropsType): JSX.Element;
}
declare module "src/components/Toggle/index" {
    import { InputPropsTypes, BooleanChangeFnType, ChangelessInputProps } from "src/commons/interfaces";
    interface ToggleProps extends InputPropsTypes, ChangelessInputProps {
        onChange?: BooleanChangeFnType;
    }
    export function Toggle({ children, className, inputClassName, style, disabled, checked, onChange, }: ToggleProps): JSX.Element;
}
declare module "@accurat/react-components" {
    export { Button } from "src/components/Button/index";
    export { Checkbox } from "src/components/Checkbox/index";
    export { FlexView } from "src/components/FlexView/index";
    export { Radio } from "src/components/Radio/index";
    export { Select } from "src/components/Select/index";
    export { TextInput } from "src/components/TextInput/index";
    export { Toggle } from "src/components/Toggle/index";
}
declare module "src/components/Draggable/index" {
    import * as React from 'react';
    type HTMLDragEvt = React.DragEvent<HTMLDivElement>;
    type OnDrag = (event: HTMLDragEvt) => void;
    interface State {
        dragging: boolean;
        dropping: boolean;
        variable: string;
    }
    interface DefaultProps {
        children: string;
        draggingClassName: string;
        dropClassName: string;
        onDragStart?: OnDrag;
        onDragEnd?: OnDrag;
        onDragOver?: OnDrag;
        onDragExit?: OnDrag;
        onDragEnter?: OnDrag;
        style?: React.CSSProperties;
        className?: string;
    }
    type MaybeTarget = {
        target: true;
        onDrop: OnDrag;
    } | {
        target: false;
    };
    type Props = DefaultProps & MaybeTarget;
    export default class Draggable extends React.Component<Props, State> {
        state: {
            dragging: boolean;
            dropping: boolean;
            variable: string;
            id: string;
        };
        node: HTMLDivElement;
        dragComponentId: string;
        onDragStart: (event: HTMLDragEvt) => void;
        onDragEnd: (event: HTMLDragEvt) => void;
        onDragOver: (event: HTMLDragEvt) => void;
        onDragEnter: (event: HTMLDragEvt) => void;
        onDragExit: (event: HTMLDragEvt) => void;
        onDrop: (event: HTMLDragEvt) => void;
        render(): JSX.Element;
    }
}
