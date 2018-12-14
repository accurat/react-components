import { noop } from 'lodash'

export interface InputPropsTypes {
  children?: React.ReactNode
  className?: string
  inputClassName?: string
  style?: object
  disabled?: boolean
  checked?: boolean
  onChange?: (event: boolean) => void // This has to be fixed
  reset?: boolean
  invertColor?: string
}

export const InputDefaultProps: object = {
  className: '',
  inputClassName: '',
  style: {},
  disabled: false,
  checked: false,
  onClick: noop,
  onChange: noop,
  reset: false,
}
