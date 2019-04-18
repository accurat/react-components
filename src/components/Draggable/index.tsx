import * as React from 'react'

type HTMLDragEvt = React.DragEvent<HTMLDivElement>

interface State {
  dragging: boolean
  hovered: boolean
  variable: string
}

interface DefaultProps {
  variable: string
  variableVerbose?: string
  draggingOpacity?: number
  // Event Props
  onDragStart?: (event: HTMLDragEvt) => void
  onDragEnd?: (event: HTMLDragEvt) => void
  onDragOver?: (event: HTMLDragEvt) => void
  onDragExit?: (event: HTMLDragEvt) => void
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

export class Draggable extends React.Component<Props, State> {
  state = {
    dragging: false,
    hovered: false,
    variable: this.props.variable
  }

  onDragStart = (event: HTMLDragEvt) => {
    const { variable, onDragStart } = this.props
    event.dataTransfer.setData('id', variable)
    this.setState({ dragging: true })

    if (onDragStart) onDragStart(event)
  }

  onDragEnd = (_: HTMLDragEvt) => {
    const { onDragEnd } = this.props
    this.setState({ dragging: false })

    if (onDragEnd) onDragEnd(_)
  }

  onDragOver = (event: HTMLDragEvt) => {
    const { onDragOver } = this.props
    event.preventDefault()
    if (onDragOver) onDragOver(event)
  }

  onDragExit = (event: HTMLDragEvt) => {
    const { onDragExit } = this.props
    this.setState({ hovered: false })
    event.preventDefault()

    if (onDragExit) onDragExit(event)
  }

  onDrop = (event: HTMLDragEvt): void => {
    if (!this.props.isTarget) return

    const dropped = event.dataTransfer.getData('id')
    if (!dropped || dropped === 'undefined') return
    this.setState({ hovered: false, variable: dropped })

    const { onDrop } = this.props
    if (onDrop) onDrop(event)
  }

  render() {
    const { dragging } = this.state
    const { variable, className, isTarget, draggingOpacity = 0.1775, style = {} } = this.props
    const variableVerbose = this.props.variableVerbose || variable
    const cursor = dragging ? 'grabbing' : 'grab'
    const opacity = dragging ? draggingOpacity : 1

    return (
      <div
        className={`ba pt2 pb2 pl3 pr3 truncate br4 ${className}`}
        draggable={true}
        // onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragExit}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDrop={isTarget ? this.onDrop : null}
        style={{
          opacity,
          cursor,
          backgroundColor: 'white',
          ...style
        }}
      >
        {variableVerbose}
      </div>
    )
  }
}
