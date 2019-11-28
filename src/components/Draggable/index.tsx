import * as React from 'react'
import { uniqueId, noop } from 'lodash'
import classNames from 'classnames'

type HTMLDragEvt = React.DragEvent<HTMLDivElement>
type OnDrag = (event: HTMLDragEvt) => void

interface State {
  dragging: boolean
  dropping: boolean
  variable: string
}

interface DefaultProps {
  children: string
  draggingClassName: string
  dropClassName: string
  // Event Props
  onDragStart?: OnDrag
  onDragEnd?: OnDrag
  onDragOver?: OnDrag
  onDragExit?: OnDrag
  onDragEnter?: OnDrag
  // Style props
  style?: React.CSSProperties
  className?: string
}

type MaybeTarget =
  | {
      target: true
      onDrop: OnDrag
    }
  | {
      target: false
    }

type Props = DefaultProps & MaybeTarget

export default class Draggable extends React.Component<Props, State> {
  state = {
    dragging: false,
    dropping: false,
    variable: this.props.children || '',
    id: uniqueId(`component-`),
  }

  node: HTMLDivElement = null
  dragComponentId: string = JSON.stringify({ variable: this.state.variable, id: this.state.id })

  onDragStart = (event: HTMLDragEvt) => {
    const { onDragStart } = this.props
    event.dataTransfer.setData('id', this.dragComponentId)

    if (onDragStart) onDragStart(event)
    this.setState({ dragging: true })
  }

  onDragEnd = (event: HTMLDragEvt) => {
    const { onDragEnd } = this.props

    if (onDragEnd) onDragEnd(event)
    this.setState({ dragging: false })
  }

  onDragOver = (event: HTMLDragEvt) => {
    const { onDragOver } = this.props
    event.preventDefault()

    if (onDragOver) onDragOver(event)
  }

  onDragEnter = (event: HTMLDragEvt) => {
    const { onDragEnter } = this.props
    event.preventDefault()
    if (onDragEnter) onDragEnter(event)
    this.setState({ dropping: true })
  }

  onDragExit = (event: HTMLDragEvt) => {
    const { onDragExit } = this.props
    event.preventDefault()

    if (onDragExit) onDragExit(event)
    this.setState({ dropping: false })
  }

  onDrop = (event: HTMLDragEvt): void => {
    if (!this.props.target) return

    const data = event.dataTransfer.getData('id')
    if (!data || data === 'undefined') return
    const { variable } = JSON.parse(data)
    const { onDrop } = this.props
    onDrop(event)

    this.setState({ dropping: false, variable })
  }

  render() {
    const { dragging, dropping, variable } = this.state
    const { className, target, style = {}, draggingClassName, dropClassName } = this.props

    const draggingStyle = draggingClassName || 'o-40'
    const hoverStyle = dropClassName || 'bg-blue'

    const classes = classNames(className, 'truncate', {
      [draggingStyle]: dragging,
      [hoverStyle]: dropping && target,
    })

    return (
      <div
        draggable
        onDragLeave={this.onDragExit}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDrop={target ? this.onDrop : () => this.setState({ dropping: false })}
        style={{
          cursor: dragging ? 'grabbing' : 'grab',
          ...style,
        }}
        ref={el => {
          this.node = el
        }}
        className={classes}
      >
        {variable}
      </div>
    )
  }
}
