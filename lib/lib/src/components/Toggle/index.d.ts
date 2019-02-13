import { InputPropsTypes, BooleanChangeFunction } from '../../commons/interfaces';
interface ToggleProps extends InputPropsTypes {
    onChange?: BooleanChangeFunction;
}
export default function Toggle({ children, className, inputClassName, style, disabled, checked, onChange, reset, }: ToggleProps): JSX.Element;
export {};
