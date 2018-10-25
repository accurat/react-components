import { InputPropsTypes } from '../../commons/interfaces';
export interface SvgParams {
    className: string;
    style: object;
}
export interface CheckBoxArguments extends InputPropsTypes {
    svg: JSX.Element;
}
export default function Checkbox({ children, svg, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: CheckBoxArguments): JSX.Element;
