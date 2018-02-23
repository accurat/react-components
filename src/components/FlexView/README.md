```jsx
<FlexView column vAlign="top" hAlign="center" className="w-100 h5">
  <FlexView className="w-100 h-20 mv4">
    <div className="w-50 bg-red" />
    <div className="w-50 bg-blue" />
  </FlexView>

  <FlexView hAlign="between" className="w-100 h-20 mv4">
    <FlexView className="w-30 bg-red" />
    <FlexView className="w-30 bg-yellow" />
    <FlexView className="w-30 bg-blue" />
  </FlexView>

  <FlexView className="w-80 h-20 mv4">
    <FlexView className="w-20 bg-red" />
    <FlexView grow className="bg-yellow" />
    <FlexView className="w-20 bg-blue" />
  </FlexView>
</FlexView>
```
