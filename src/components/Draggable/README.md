```jsx

<FlexView hAlign="around">
  <Draggable className="bg-blue">{'Second source'}</Draggable>
  <Draggable>{'First source'}</Draggable>
  <Draggable isTarget onDrop={(e) => console.log(e.dataTransfer.getData('id'))}>{'Target'}</Draggable>
</FlexView>
```