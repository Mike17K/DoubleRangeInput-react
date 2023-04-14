# TO RUN

```
git clone https://github.com/Mike17K/DoubleRangeInput-react.git
cd DoubleRangeInput-react
npm run start
```

## Comonent Description

The component is located in the ./components/DoubleScrollBar/DoubleScrollBar.jsx file
as arguments it takes 
- the min input value
- the max input value
- the step value
- the forid string that defines the **id** of the element that will carry the value of 
the selected ranges of values in its innerHTML

```
<DoubleScrollBar
 min={2}
 max={10}
 step={0.1}
 forid="display1"
 />
 <div id="display1"></div>
```

## Disclamer 
Its not a prefect component but does the job
