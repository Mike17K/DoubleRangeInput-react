import './App.css';
import { DoubleScrollBar } from './components/DoubleScrollBar/DoubleScrollBar';

function App() {
  return (
    <>
    <DoubleScrollBar
     min={2}
     max={10}
     step={0.1}
     forid="display1"
     />
     <div id="display1"></div>

    <DoubleScrollBar
     min={2}
     max={100}
     step={1}
     forid="display2"
     />
     <div id="display2"></div>
     </>
  );
}

export default App;
