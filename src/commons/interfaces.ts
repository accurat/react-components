import { noop } from 'lodash'

export type BooleanChangeFunction = (event: boolean) => void
export type InputChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void

type OnChangeFunction = BooleanChangeFunction | InputChangeFunction

export interface InputPropsTypes {
  children?: React.ReactNode
  className?: string
  inputClassName?: string
  style?: object
  disabled?: boolean
  checked?: boolean
  onChange?: OnChangeFunction
  reset?: boolean
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
