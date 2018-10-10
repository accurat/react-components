import * as React from 'react'
import classNames from 'classnames'

interface FlexViewProps {
  children?: React.ReactNode
  column?: boolean
  vAlign?: 'top' | 'center' | 'bottom' | 'between' | 'around' | 'baseline' | 'stretch'
  hAlign?: 'left' | 'center' | 'right' | 'between' | 'around' | 'baseline' | 'stretch'
  grow?: boolean | number
  shrink?: boolean | number
  basis?: string | number
  wrap?: boolean
  className?: string // This could be a cool new type
  style?: object
}

export default class FlexView extends React.Component<FlexViewProps> {
  public static defaultProps = { className: '', style: {} }

  private getGrow = (): number => {
    const { grow } = this.props
    if (grow === undefined) {
      return 0
    }
    return typeof grow === 'number' ? grow : 1 // default is 0
  }

  private getShrink = (): number => {
    const { shrink, basis } = this.props

    if (shrink !== undefined) {
      // shrink is passed
      if (typeof shrink === 'number') {
        return shrink
      } else {
        return shrink ? 1 : 0 // casts boolean -> number
      }
    } else {
      // no shrink is passed
      return basis && basis !== 'auto' ? 0 : 1
    } // default is 1
  }

  private getBasis = (): string => {
    const { basis } = this.props
    if (basis) {
      const suffix = typeof basis === 'number' || String(parseInt(basis, 10)) ? 'px' : ''
      return basis + suffix
    } else {
      return 'auto' // default is auto
    }
  }

  private getFlexStyle = (): object => {
    const grow = this.getGrow()
    const shrink = this.getShrink()
    const basis = this.getBasis()
    const values = `${grow} ${shrink} ${basis}`

    return {
      WebkitBoxFlex: values,
      MozBoxFlex: values,
      msFlex: values,
      WebkitFlex: values,
      flex: values,
    }
  }

  private getStyle = (): object => {
    return { ...this.getFlexStyle(), ...this.props.style }
  }
  private getContentAlignmentClasses(): string {
    const vAlignClasses = this.props.column
      ? {
          top: 'justify-start',
          center: 'justify-center',
          bottom: 'justify-end',
          between: 'justify-between',
          around: 'justify-around',
        }
      : {
          top: 'items-start',
          center: 'items-center',
          bottom: 'items-end',
          baseline: 'items-baseline',
          stretch: 'items-stretch',
        }

    const hAlignClasses = this.props.column
      ? {
          left: 'items-start',
          center: 'items-center',
          right: 'items-end',
          baseline: 'items-baseline',
          stretch: 'items-stretch',
        }
      : {
          left: 'justify-start',
          center: 'justify-center',
          right: 'justify-end',
          between: 'justify-between',
          around: 'justify-around',
        }

    const vAlign = this.props.vAlign && vAlignClasses[this.props.vAlign]
    const hAlign = this.props.hAlign && hAlignClasses[this.props.hAlign]

    return classNames(vAlign, hAlign)
  }

  private getClasses = (): string => {
    const direction = this.props.column && 'flex-column'
    const wrap = this.props.wrap && 'flex-wrap'

    const contentAlignment = this.getContentAlignmentClasses()

    return classNames('flex', direction, contentAlignment, wrap, this.props.className)
  }

  public render() {
    const className = this.getClasses()
    const style = this.getStyle()

    // TODO - can you pass other props?
    return (
      <div className={className} style={style}>
        {this.props.children}
      </div>
    )
  }
}
