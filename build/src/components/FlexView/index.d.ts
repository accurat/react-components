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
export default function FlexView({ children, column, vAlign, hAlign, grow, shrink, basis, wrap, className, style, ...props }: FlexViewProps): JSX.Element;
