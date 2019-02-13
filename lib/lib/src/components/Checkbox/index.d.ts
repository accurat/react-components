import * as React from 'react';
import { InputPropsTypes, BooleanChangeFnType } from '../../commons/interfaces';
interface SVGProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface CheckBoxArguments extends InputPropsTypes {
    propSvg?: React.SFC<SVGProps>;
    onChange?: BooleanChangeFnType;
}
export default function Checkbox({ children, propSvg, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: CheckBoxArguments): JSX.Element;
export {};
