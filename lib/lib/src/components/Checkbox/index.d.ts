import * as React from 'react';
import { InputPropsTypes, BooleanChangeFnType, ChangelessInputProps } from '../../commons/interfaces';
interface SVGProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface CheckBoxArguments extends InputPropsTypes, ChangelessInputProps {
    propSvg?: React.SFC<SVGProps>;
    onChange?: BooleanChangeFnType;
}
export default function Checkbox({ children, propSvg, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: CheckBoxArguments): JSX.Element;
export {};
