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
  <p>Selected: {JSON.stringify(state)}</p>

  <Checkbox onChange={changeSelected('first')} checked={state.first}>
    Click me
  </Checkbox>

  <Checkbox
    onChange={changeSelected('second')}
    checked={state.second}
    className="green"
    inputClassName={`${state.second ? 'bg-green' : ''} white b--green`}
  >
    Colorful Checkbox
  </Checkbox>

  <Checkbox disabled>Disabled Checkbox</Checkbox>
</FlexView>
```
