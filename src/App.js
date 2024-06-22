import { useState } from 'react';
import './App.css';
import { DoubleScrollBar } from './components/DoubleScrollBar/DoubleScrollBar';

function App() {
  const [data1, setData1] = useState({from:2,to:10});
  const [data2, setData2] = useState({from:2,to:100});
  const [data3, setData3] = useState({from:2,to:100});
  const [data4, setData4] = useState({from:2,to:100});

  return (
    <div class="wrapper">

      <div class="wrapper-1">
        <DoubleScrollBar
        min={2}
        max={10}
        step={0.1}     
        className="SB-1"
        onChange={(from,to)=>{
            setData1({from,to});
        }}

        />
        <div id="display1">{
          `From: ${data1.from} To: ${data1.to}`
        }</div>
      </div>

      <div class="wrapper-2">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        className="SB-2"
          onChange={(from,to)=>{
              setData2({from,to});
          } }
        />
        <div id="display2">
          {
            `From: ${data2.from} To: ${data2.to}`
          }
        </div>
      </div>

      <div class="wrapper-3">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        className="SB-3"
          onChange={(from,to)=>{
              setData3({from,to});
          }}
        />
        <div id="display3">
          {
            `From: ${data3.from} To: ${data3.to}`
          } 
        </div> 
      </div>
      
      <div class="wrapper-4">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        className="SB-4"
          onChange={(from,to)=>{
              setData4({from,to});
          }}
        />
        <div id="display4">
          {
            `From: ${data4.from} To: ${data4.to}`
          }
        </div>
      </div>
     </div>
  );
}

export default App;
