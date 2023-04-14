import './App.css';
import { DoubleScrollBar } from './components/DoubleScrollBar/DoubleScrollBar';

function App() {
  return (
    <div class="wrapper">

    <div class="wrapper-1">
    <DoubleScrollBar
     min={2}
     max={10}
     step={0.1}
     forid="display1"
     class="SB-1"
     />
     <div id="display1"></div>
    </div>

    <div class="wrapper-2">
    <DoubleScrollBar
     min={2}
     max={100}
     step={1}
     forid="display2"
     class="SB-2"
     />
     <div id="display2"></div>
     </div>
    <div class="wrapper-3">
    <DoubleScrollBar
     min={2}
     max={100}
     step={1}
     forid="display3"
     class="SB-3"
     />
     <div id="display3"></div>
     </div>
    <div class="wrapper-4">
    <DoubleScrollBar
     min={2}
     max={100}
     step={1}
     forid="display4"
     class="SB-4"
     />
     <div id="display4"></div>
     </div>
     </div>
  );
}

export default App;
