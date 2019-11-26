```jsx
import { FlexView } from '../FlexView'

;<FlexView hAlign="around">
  <Draggable className="bg-red white">{'Second source'}</Draggable>
  <Draggable>{'First source'}</Draggable>
  <Draggable
    hoveredClasses="bg-blue white"
    target
    onDrop={e => console.log(JSON.parse(e.dataTransfer.getData('id')))}
  >
    {'Target'}
  </Draggable>
</FlexView>
```
