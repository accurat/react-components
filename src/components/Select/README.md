```jsx
import { FlexView } from '../FlexView'
import { Checkbox } from '../Checkbox'

initialState = { selected: 'Select..' }

const setSelected = selected => () => {
  setState({ selected })
}

;<FlexView className="h3" hAlign="around" vAlign="center">
  <Select className="w4 pa2 pointer" childrenClassName="bg-white shadow-4" label="Go to..">
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

  <Select
    className="w4 bg-black white pa2 br1 pointer"
    childrenClassName="bg-black br1 overflow-hidden w4 white"
    label={state.selected}
  >
    <div
      className="bb b--white hover-bg-white hover-black pa2 pointer"
      onClick={setSelected('(·_·)')}
    >
      (·_·)
    </div>
    <div
      className="bb b--white hover-bg-white hover-black pa2 pointer"
      onClick={setSelected('(^Д^)')}
    >
      (^Д^)
    </div>
    <div
      className="bb b--white hover-bg-white hover-black pa2 pointer"
      onClick={setSelected('(≥o≤)')}
    >
      (≥o≤)
    </div>
    <div className="pa2 hover-bg-white hover-black pointer" onClick={setSelected('(o_o)')}>
      (o_o)
    </div>
  </Select>

  <Select
    className="w5 bg-white ba br2 pa1 pointer"
    childrenClassName="bg-white shadow-4 br2"
    scrollable
    autoclose={false}
    label="Multiple selection"
  >
    <Checkbox className="pa2">Item 1</Checkbox>
    <Checkbox checked className="pa2">
      Item 2
    </Checkbox>
    <Checkbox className="pa2">Item 3</Checkbox>
    <Checkbox checked className="pa2">
      Item 4
    </Checkbox>
    <Checkbox checked className="pa2">
      Item 5
    </Checkbox>
    <Checkbox className="pa2">Item 6</Checkbox>
    <Checkbox className="pa2">Item 7</Checkbox>
    <Checkbox className="pa2">Item 8</Checkbox>
    <Checkbox className="pa2">Item 9</Checkbox>
    <Checkbox className="pa2">Item 10</Checkbox>
    <Checkbox className="pa2">Item 11</Checkbox>
  </Select>

  <Select className="w4" disabled label="Disabled">
    <div className="pa2">1</div>
    <div className="pa2">2</div>
    <div className="pa2">3</div>
    <div className="pa2">4</div>
  </Select>
</FlexView>
```
