import * as React from 'react'
import classNames from 'classnames'

export interface FlexViewProps {
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

export function FlexView({
  children,
  column,
  vAlign,
  hAlign,
  grow,
  shrink,
  basis,
  wrap,
  className = '',
  style = {},
  ...props
}: FlexViewProps): JSX.Element {
  function getGrow(): number {
    if (grow === undefined) {
      return 0
    }
    return typeof grow === 'number' ? grow : 1 // default is 0
  }

  function getShrink(): number {
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

  function getBasis(): string {
    if (basis) {
      const suffix = typeof basis === 'number' || String(parseInt(basis, 10)) ? 'px' : ''
      return basis + suffix
    } else {
      return 'auto' // default is auto
    }
  }

  function getFlexStyle(): object {
    const grow = getGrow()
    const shrink = getShrink()
    const basis = getBasis()
    const values = `${grow} ${shrink} ${basis}`

    return {
      WebkitBoxFlex: values,
      MozBoxFlex: values,
      msFlex: values,
      WebkitFlex: values,
      flex: values,
    }
  }

  function getStyle(): object {
    return { ...getFlexStyle(), ...style }
  }

  function getContentAlignmentClasses(): string {
    const vAlignClasses = column
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

    const hAlignClasses = column
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

    const vAlignClassObject = vAlign && vAlignClasses[vAlign]
    const hAlignClassObject = hAlign && hAlignClasses[hAlign]

    return classNames(vAlignClassObject, hAlignClassObject)
  }

  function getClasses(): string {
    const direction = column && 'flex-column'
    const wrapClassName = wrap && 'flex-wrap'

    const contentAlignment = getContentAlignmentClasses()

    return classNames('flex', direction, contentAlignment, wrapClassName, className)
  }

  return (
    <div className={getClasses()} style={getStyle()} {...props}>
      {children}
    </div>
  )
}
