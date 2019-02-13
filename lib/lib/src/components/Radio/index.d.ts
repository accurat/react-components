import { InputPropsTypes, BooleanChangeFnType } from '../../commons/interfaces';
export interface RadioProps extends InputPropsTypes {
    onChange?: BooleanChangeFnType;
}
export default function Radio({ children, className, inputClassName, style, disabled, checked, onChange, reset, ...props }: RadioProps): JSX.Element;
