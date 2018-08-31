```jsx
initialState = { selected: 'Select..' }

const setSelected = (selected) => () => {
  setState({ selected })
}

<FlexView hAlign="around">
  <Select className="w4" label="Go to..">
    <a className="pa2 link db" target="_blank" href="https://www.accurat.it/">
      Accurat Homepage
    </a>
    <a className="pa2 link db" target="_blank" href="https://www.accurat.it/works">
      Works
    </a>
    <a className="pa2 link db" target="_blank" href="https://www.accurat.it/solutions/">
      Solutions
    </a>
    <a className="pa2 link db" target="_blank" href="https://www.accurat.it/contact">
      Contact
    </a>
  </Select>

  <Select className="w4 bg-black white" childrenClassName="bg-black" label={state.selected}>
    <div className="white bg-blue pa3 pointer" onClick={setSelected('(·_·)')}>(·_·)</div>
    <div className="white bg-purple pa3 pointer" onClick={setSelected('(^Д^)')}>(^Д^)</div>
    <div className="white bg-orange pa3 pointer" onClick={setSelected('(≥o≤)')}>(≥o≤)</div>
    <div className="white bg-green pa3 pointer" onClick={setSelected('(o_o)')}>(o_o)</div>
  </Select>

  <Select className="w5" scrollable autoclose={false} label="Multiple selection">
    <Checkbox className="pa2 pointer">Item 1</Checkbox>
    <Checkbox checked className="pa2 pointer">Item 2</Checkbox>
    <Checkbox className="pa2 pointer">Item 3</Checkbox>
    <Checkbox checked className="pa2 pointer">Item 4</Checkbox>
    <Checkbox checked className="pa2 pointer">Item 5</Checkbox>
    <Checkbox className="pa2 pointer">Item 6</Checkbox>
    <Checkbox className="pa2 pointer">Item 7</Checkbox>
    <Checkbox className="pa2 pointer">Item 8</Checkbox>
    <Checkbox className="pa2 pointer">Item 9</Checkbox>
    <Checkbox className="pa2 pointer">Item 10</Checkbox>
    <Checkbox className="pa2 pointer">Item 11</Checkbox>
  </Select>

  <Select className="w4" disabled label='Disabled'>
    <div className="pa2">1</div>
    <div className="pa2">2</div>
    <div className="pa2">3</div>
    <div className="pa2">4</div>
  </Select>

</FlexView>
```
