export interface InputPropsTypes {
  children?: React.ReactNode
  className?: string
  inputClassName?: string
  style?: object
  disabled?: boolean
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void // This has to be fixed
  reset?: boolean
}

export const InputDefaultProps: object = {
  className: '',
  inputClassName: '',
  style: {},
  checked: false,
  onChange: () => {},
  reset: false,
}
