```jsx
initialState = { emailValid: false }

const checkEmailValidity = (validity) => {
  setState({ emailValid: validity })
}

<FlexView column vAlign="around" className="h5">
  <TextInput className="w5 bw1" defaultValue="Dummy Text" />

  <TextInput type="password" className="w4 br-pill b--blue blue bw1" value="reallycomplexpassword" />

  <FlexView vAlign='center'>
    <TextInput
      type="email"
      defaultValue="Type an Email"
      checkValidity={checkEmailValidity}
      className="w5 mr2 tc bt-0 br-0 bl-0"
    />
    {state.emailValid && '✓'}
  </FlexView>

  <TextInput type="number" className="w4 br-pill" defaultValue={4815162342} />
  <TextInput disabled className="w5" defaultValue='Disabled' />
</FlexView>
```
