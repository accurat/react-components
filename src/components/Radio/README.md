```jsx
import { FlexView } from '../FlexView'

initialState = { selected: 2 }

const changeSelected = item => value => {
  setState({ selected: item })
}

;<FlexView column vAlign="around" className="h5">
  <p>Selected: {state.selected}</p>

  <Radio onChange={changeSelected(1)} checked={state.selected === 1}>
    Click me
  </Radio>

  <Radio
    onChange={changeSelected(2)}
    checked={state.selected === 2}
    className="blue"
    inputClassName="bg-blue b--blue"
  >
    Colorful Radio
  </Radio>

  <Radio disabled>Disabled Radio</Radio>
</FlexView>
```
