import * as React from 'react';
export interface DropDownParams {
    style: object;
}
export interface SelectProps {
    children?: React.ReactNode;
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
export default class Select extends React.Component<SelectProps> {
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
    handleOutsideClick: (event: MouseEvent) => void;
    render(): JSX.Element;
}
