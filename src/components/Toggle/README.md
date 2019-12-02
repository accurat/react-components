```jsx
import { FlexView } from '../FlexView'

initialState = {
  first: false,
  second: true,
}

const changeSelected = item => value => {
  setState({ [item]: value })
}

;<FlexView column vAlign="around" className="h5">
  <pre>{JSON.stringify(state, null, 2)}</pre>

  <Toggle onChange={changeSelected('first')} checked={state.first}>
    Default Toggle
  </Toggle>

  <Toggle
    onChange={changeSelected('second')}
    checked={state.second}
    className="blue"
    inputClassName={`${state.second ? 'bg-blue white' : ''} br-pill transition`}
  >
    Circular Toggle
  </Toggle>

  <Toggle disabled>Disabled Toggle</Toggle>
</FlexView>
```
