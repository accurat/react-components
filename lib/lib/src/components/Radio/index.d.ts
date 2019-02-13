import { InputPropsTypes, BooleanChangeFunction } from '../../commons/interfaces';
export interface RadioProps extends InputPropsTypes {
    onChange?: BooleanChangeFunction;
}
export default function Radio({ children, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: RadioProps): JSX.Element;
