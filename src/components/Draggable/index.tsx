import * as React from 'react'
import { uniqueId } from 'lodash'
import classNames from 'classnames'

type HTMLDragEvt = React.DragEvent<HTMLDivElement>
type OnDrag = (event: HTMLDragEvt) => void

interface State {
  dragging: boolean
  hovered: boolean
  variable: string
}

interface DefaultProps {
  children: string
  draggingClasses: string
  hoveredClasses: string
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
    hovered: false,
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
    this.setState({ hovered: true })
  }

  onDragExit = (event: HTMLDragEvt) => {
    const { onDragExit } = this.props
    event.preventDefault()

    if (onDragExit) onDragExit(event)
    this.setState({ hovered: false })
  }

  onDrop = (event: HTMLDragEvt): void => {
    if (!this.props.target) return

    const data = event.dataTransfer.getData('id')
    if (!data || data === 'undefined') return
    const { variable } = JSON.parse(data)
    const { onDrop } = this.props
    onDrop(event)

    this.setState({ hovered: false, variable })
  }

  render() {
    const { dragging, hovered, variable } = this.state
    const { className, target, style = {}, draggingClasses, hoveredClasses } = this.props

    const hoveredHoverable = hovered && target
    const draggingStyle = draggingClasses || 'o-40 bg-white'
    const hoverStyle = hoveredClasses || 'bg-silver'

    const classes = classNames(className, 'ba pt2 pb2 pl3 pr3 truncate br4', {
      [draggingStyle]: dragging,
      [hoverStyle]: hoveredHoverable,
    })

    return (
      <div
        draggable
        onDragLeave={this.onDragExit}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDrop={target ? this.onDrop : () => this.setState({ hovered: false })}
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
