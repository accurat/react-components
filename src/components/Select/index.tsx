import * as React from 'react'
import classNames from 'classnames'
import Scrollbars from 'react-custom-scrollbars'
import { omit } from 'lodash'
import { InputDefaultProps } from '../../commons/interfaces'
import { ReactComponent as DownIcon } from '../../assets/icons/down.svg'

export interface DropDownParams {
  style: object
}

export interface SelectProps {
  children?: React.ReactNode
  className?: string
  childrenClassName?: string
  style?: object
  customIcon?: () => JSX.Element
  label?: string
  scrollable?: boolean
  dark?: boolean
  open?: boolean
  disabled?: boolean
  autoclose?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export class Select extends React.Component<SelectProps> {
  onOpen() {
    document.body.addEventListener('mouseup', this.handleOutsideClick, { passive: true })
    document.body.addEventListener('touchend', this.handleOutsideClick, { passive: true })
  }

  onClose() {
    document.body.removeEventListener('mouseup', this.handleOutsideClick)
    document.body.removeEventListener('touchend', this.handleOutsideClick)
  }

  componentDidUpdate(prevProps: SelectProps, prevState: any) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.onOpen()
      } else {
        this.onClose()
      }
    }
  }

  static defaultProps = {
    ...InputDefaultProps,
    autoclose: true,
    childrenClassName: '',
    scrollable: false,
  }
  state = { open: this.props.open }
  container: HTMLDivElement = null

  setClose = (): void => this.setState({ open: false })
  setOpen = (): void => this.setState({ open: true })
  toogleOpen = (): void => this.setState({ open: !this.state.open })

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.toogleOpen()
    this.props.onClick(event)
  }

  handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      !(event.target instanceof Element) || // https://stackoverflow.com/a/50326668
      this.container.contains(event.target)
    ) {
      return
    }
    this.setClose()
  }

  render() {
    const {
      children,
      className,
      childrenClassName,
      style,
      label,
      customIcon,
      scrollable,
      autoclose,
      disabled,
    } = this.props

    const { open } = this.state
    const classes = classNames('relative', {
      'o-40 pointer-events-none': disabled,
    })

    const childrenClasses = classNames(childrenClassName, 'absolute z-5', {
      dn: !open,
      'w-100': scrollable,
      h5: open && scrollable,
    })

    const props = omit(this.props, Object.keys(Select.defaultProps))

    const Icon = customIcon || DownIcon

    return (
      <div
        className={classes}
        ref={el => {
          this.container = el
        }}
      >
        <div
          {...props}
          onClick={this.handleClick}
          className={`${className} relative`}
          style={style}
        >
          <div
            className="relative flex justify-between items-center"
            style={{
              borderColor: 'currentColor',
              boxSizing: 'content-box',
            }}
          >
            <span>{label}</span>
            <div
              className={`flex ${open ? 'rotate-180' : ''}`}
              style={{ minWidth: 10, minHeight: 10 }}
            >
              <Icon
                className="absolute right-0 top-0 bottom-0 m-auto"
                style={{ maxWidth: 10, maxHeight: 10 }}
              />
            </div>
          </div>
        </div>
        <div className={childrenClasses}>
          {scrollable ? (
            <Scrollbars className="h-100">
              {React.Children.map(
                children,
                (child, i): JSX.Element => {
                  return (
                    <div key={i} onClick={autoclose ? this.setClose : null}>
                      {child}
                    </div>
                  )
                },
              )}
            </Scrollbars>
          ) : (
            React.Children.map(
              children,
              (child, i): JSX.Element => {
                return (
                  <div key={i} onClick={autoclose ? this.setClose : null}>
                    {child}
                  </div>
                )
              },
            )
          )}
        </div>
      </div>
    )
  }
}
