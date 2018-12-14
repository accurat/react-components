```jsx
initialState = { emailValid: false }

const checkEmailValidity = validity => {
  setState({ emailValid: validity })
}

<FlexView hAlign="start" vAlign="around" wrap>
  <TextInput className="bw1 ma2" defaultValue="Dummy Text" />

  <TextInput
    type="password"
    className="br-pill b--blue blue bw1 ma2"
    value="reallycomplexpassword"
  />

  <FlexView vAlign="center" className="ma2">
    <TextInput
      type="email"
      defaultValue="Type email"
      checkValidity={checkEmailValidity}
      className="mr2 tc bt-0 br-0 bl-0"
    />
    {state.emailValid && '✓'}
  </FlexView>

  <TextInput type="date" className="ma2 bw1" defaultValue={4815162342} />

  <TextInput type="time" className="ma2 bw1" defaultValue={4815162342} />

  <TextInput disabled className="ma2" defaultValue="Disabled" />
</FlexView>
```
