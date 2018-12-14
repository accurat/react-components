import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    disabled?: boolean;
    transparent?: boolean;
    reset?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: object;
    type?: string;
}
export default function Button({ children, disabled, transparent, reset, className, style, onClick, type, ...props }: ButtonProps): JSX.Element;
