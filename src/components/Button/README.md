```jsx
import { FlexView } from '../FlexView'

const prompt = () => {
  alert('Clicked!')
}

;<FlexView hAlign="around">
  <Button>Button</Button>

  <Button className="br-pill">Pill</Button>

  <Button transparent className="br-pill">
    Transparent
  </Button>

  <Button className="bg-red">Colorful</Button>

  <Button className="br-pill bg-blue hover-bg-dark-blue" onClick={prompt}>
    Click me
  </Button>

  <Button disabled className="bg-blue hover-bg-dark-blue">
    Disabled
  </Button>
</FlexView>
```
