```jsx
initialState = {
  first: false,
  second: true,
  third: true,
  fourth: true,
}

const changeSelected = (item) => (value) => {
  setState({ [item]: value })
}

<FlexView column vAlign="around" className="h5">
  <p>Selected: {JSON.stringify(state)}</p>

  <Checkbox onChange={changeSelected('first')} checked={state.first}>Click me</Checkbox>

  <Checkbox onChange={changeSelected('second')} checked={state.second} className="green" inputClassName="bg-green b--green">
    Colorful Checkbox
  </Checkbox>

  <Checkbox onChange={changeSelected('third')} checked={state.third} light className="black" inputClassName="bg-white b--black">
    Light Checkbox
  </Checkbox>

  <Checkbox onChange={changeSelected('fourth')} checked={state.fourth} className="black" inputClassName="bg-blue b--black" reset>
    Resetted Style Checkbox (remove border style)
  </Checkbox>

  <Checkbox disabled>
    Disabled Checkbox
  </Checkbox>
</FlexView>
```
