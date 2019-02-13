import { InputPropsTypes, BooleanChangeFnType } from '../../commons/interfaces';
interface ToggleProps extends InputPropsTypes {
    onChange?: BooleanChangeFnType;
}
export default function Toggle({ children, className, inputClassName, style, disabled, checked, onChange, reset, }: ToggleProps): JSX.Element;
export {};
