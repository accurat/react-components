```jsx
import { FlexView } from '../FlexView'

const prompt = () => {
  alert('Clicked!')
}

;<FlexView hAlign="around">
  <Button>Button</Button>

  <Button className="br-pill">Pill</Button>

  <Button className="bg-blue white">Color</Button>

  <Button className="bg-light-red b--red white hover-bg-red" onClick={prompt}>
    Click
  </Button>

  <Button disabled>Disabled</Button>
</FlexView>
```
