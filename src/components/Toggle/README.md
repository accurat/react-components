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

  <Toggle onChange={changeSelected('first')} checked={state.first}>Toggle me</Toggle>

  <Toggle onChange={changeSelected('second')} checked={state.second} className="red" inputClassName="bg-red">
    Colorful Toggle
  </Toggle>

  <Toggle onChange={changeSelected('third')} checked={state.third} className="blue" invertColor="bg-blue">
    Colorful Toggle
  </Toggle>

  <Toggle disabled>
    Disabled Toggle
  </Toggle>
</FlexView>
```
