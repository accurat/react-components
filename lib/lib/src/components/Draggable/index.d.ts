import * as React from 'react';
declare type HTMLDragEvt = React.DragEvent<HTMLDivElement>;
interface State {
    dragging: boolean;
    hovered: boolean;
    variable: string;
}
interface DefaultProps {
    children: string;
    hoverColor?: string;
    variableVerbose?: string;
    draggingOpacity?: number;
    onDragStart?: (event: HTMLDragEvt) => void;
    onDragEnd?: (event: HTMLDragEvt) => void;
    onDragOver?: (event: HTMLDragEvt) => void;
    onDragExit?: (event: HTMLDragEvt) => void;
    onDragEnter?: (event: HTMLDragEvt) => void;
    style?: React.CSSProperties;
    className?: string;
}
declare type MaybeTarget = {
    isTarget: true;
    onDrop: (event: HTMLDragEvt) => void;
} | {
    isTarget: false;
};
declare type Props = DefaultProps & MaybeTarget;
export default class Draggable extends React.Component<Props, State> {
    state: {
        dragging: boolean;
        hovered: boolean;
        variable: string;
    };
    node: HTMLDivElement;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd: (_: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragExit: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export {};
