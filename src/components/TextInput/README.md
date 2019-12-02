```jsx
import { FlexView } from '../FlexView'

initialState = { emailValid: false }

const checkEmailValidity = validity => {
  setState({ emailValid: validity })
}

;<FlexView column vAlign="around" wrap>
  <TextInput className="mv2" defaultValue="Dummy Text" />
  <TextInput
    type="password"
    className="br-pill b--blue blue mv2 tc"
    defaultValue="strongpassword"
  />
  <div>
    <TextInput
      type="email"
      defaultValue="some@domain.com"
      checkValidity={checkEmailValidity}
      className="mv2 tc bt-0 br-0 bl-0"
    />
    {state.emailValid && '✓'}
  </div>
  <TextInput type="date" className="mv2 br2 pl2 h2" defaultValue="2019-12-25" />
  <div>
    Timer: <TextInput type="time" className="mv2 tc tracked-mega b--none" defaultValue="12:42" />
  </div>
  <TextInput disabled className="mv2" defaultValue="Disabled" />
</FlexView>
```
