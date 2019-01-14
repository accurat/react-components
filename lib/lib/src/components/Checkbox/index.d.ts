import * as React from 'react';
import { InputPropsTypes } from '../../commons/interfaces';
interface SVGProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface CheckBoxArguments extends InputPropsTypes {
    propSvg: React.SFC<SVGProps> | null;
}
export default function Checkbox({ children, propSvg, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: CheckBoxArguments): JSX.Element;
export {};
