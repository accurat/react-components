import { noop } from 'lodash'

export type BooleanChangeFnType = (event: boolean) => void
export type InputChangeFnType = (event: React.ChangeEvent<HTMLInputElement>) => void

type OnChangeFunction = BooleanChangeFnType | InputChangeFnType

export interface InputPropsTypes {
  children?: React.ReactNode
  className?: string
  inputClassName?: string
  style?: React.CSSProperties
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

type WeakenType<T, K extends keyof T> = { [P in keyof T]: P extends K ? any : T[P] }
export type ChangelessInputProps = WeakenType<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
>
