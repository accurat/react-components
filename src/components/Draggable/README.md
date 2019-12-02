```jsx
import { FlexView } from '../FlexView'
;<FlexView hAlign="around" vAlign="center">
  <Draggable className="bg-blue white pa2">Banana 🍌</Draggable>
  <Draggable>Apple 🍎</Draggable>
  <Draggable
    className="ba pa2"
    dropClassName="bg-red white"
    target
    onDrop={e => alert(JSON.stringify(JSON.parse(e.dataTransfer.getData('id')), null, 2))}
  >
    Target
  </Draggable>
</FlexView>
```
