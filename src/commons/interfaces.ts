export interface InputPropsTypes {
  children?: React.ReactNode
  className?: string
  inputClassName?: string
  style?: object
  disabled?: boolean
  checked?: boolean
  onChange?: (event: boolean) => void // This has to be fixed
  reset?: boolean
}

export const InputDefaultProps: object = {
  className: '',
  inputClassName: '',
  style: {},
  disabled: false,
  checked: false,
  onChange: () => {},
  reset: false,
}
