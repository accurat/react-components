```jsx
import { FlexView } from '../FlexView'

initialState = {
  first: false,
  second: true,
  third: true,
}

const changeSelected = item => value => {
  setState({ [item]: value })
}

;<FlexView column vAlign="around" className="h5">
  <pre>{JSON.stringify(state, null, 2)}</pre>

  <Checkbox onChange={changeSelected('first')} checked={state.first}>
    Default Checkbox
  </Checkbox>

  <Checkbox
    onChange={changeSelected('second')}
    checked={state.second}
    className="green"
    inputClassName={`${state.second ? 'bg-green white' : ''} br-100 transition`}
  >
    Circular Checkbox
  </Checkbox>

  <Checkbox disabled>Disabled Checkbox</Checkbox>
</FlexView>
```
