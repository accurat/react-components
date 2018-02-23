```jsx
initialState = {
  first: false,
  second: true,
  third: true
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

  <Checkbox disabled>
    Disabled Checkbox
  </Checkbox>
</FlexView>
```
