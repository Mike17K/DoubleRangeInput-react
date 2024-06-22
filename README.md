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
- the className inherits class names into the component
- the onChange callback, triggers when changes happen and returns the 2 numbers (from and to)

```js
const [data1, setData1] = useState({from:2,to:10});

<DoubleScrollBar
    min={2}
    max={10}
    step={0.1}     
    className="SB-1"
    onChange={(from,to)=>{
        setData1({from,to});
    }}
/>

<div>{
    `From: ${data1.from} To: ${data1.to}`
}</div>

</div>
```

## Disclamer 
Its not a prefect component but does the job
