import * as React from 'react'

type HTMLDragEvt = React.DragEvent<HTMLDivElement>

interface State {
  dragging: boolean
  hovered: boolean
  variable: string
}

interface DefaultProps {
  children: string
  hoverColor?: string
  variableVerbose?: string
  draggingOpacity?: number
  // Event Props
  onDragStart?: (event: HTMLDragEvt) => void
  onDragEnd?: (event: HTMLDragEvt) => void
  onDragOver?: (event: HTMLDragEvt) => void
  onDragExit?: (event: HTMLDragEvt) => void
  onDragEnter?: (event: HTMLDragEvt) => void
  // Style props
  style?: React.CSSProperties
  className?: string
}

type MaybeTarget =
  | {
    isTarget: true
    onDrop: (event: HTMLDragEvt) => void
    }
  | {
    isTarget: false
    }

type Props = DefaultProps & MaybeTarget

export default class Draggable extends React.Component<Props, State> {
  state = {
    dragging: false,
    hovered: false,
    variable: this.props.children || ''
  }

  node: HTMLDivElement = null

  onDragStart = (event: HTMLDragEvt) => {
    const { variable } = this.state
    const { onDragStart } = this.props
    event.dataTransfer.setData('id', variable)

    if (onDragStart) onDragStart(event)
    this.setState({ dragging: true })
  }

  onDragEnd = (_: HTMLDragEvt) => {
    const { onDragEnd } = this.props

    if (onDragEnd) onDragEnd(_)
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

    if (!this.props.isTarget) return

    const dropped = event.dataTransfer.getData('id')
    if (!dropped || dropped === 'undefined') return
    const { onDrop } = this.props
    onDrop(event)

    this.setState({ hovered: false, variable: dropped })
  }

  render() {
    const { dragging, hovered, variable } = this.state
    const { className, isTarget, draggingOpacity = 0.1775, style = {}, hoverColor = '#d4d4cf' } = this.props
    const variableVerbose = this.props.variableVerbose || variable
    const cursor = dragging ? 'grabbing' : 'grab'
    const opacity = dragging ? draggingOpacity : 1
    const backgroundColor = hovered ? hoverColor : 'white'

    return (
      <div
        className={`ba pt2 pb2 pl3 pr3 truncate br4 ${className}`}
        draggable={true}
        onDragLeave={this.onDragExit}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDrop={isTarget ? this.onDrop : () => this.setState({hovered: false})}
        style={{
          opacity,
          cursor,
          backgroundColor,
          ...style
        }}
        ref={el => {this.node = el}}
      >
        {variableVerbose}
      </div>
    )
  }
}
