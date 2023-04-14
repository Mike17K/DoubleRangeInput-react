import React, { useState ,useEffect} from 'react'
import './DoubleScrollBar.css';



export const DoubleScrollBar = (props) => {
    const [inputFrom,setInputFrom ] = useState(props.min);
    const [inputTo,setInputTo ] = useState(props.max);

    useEffect(() => {
        const display = document.getElementById(props.forid);
        const slider = document.getElementById(`slider-${props.forid}`);
        
        if (inputFrom>inputTo){
            display.innerHTML = `${inputTo}-${inputFrom}`;
            slider.style.right = `${100-(inputFrom-props.min)/(props.max-props.min)*100}%`;
            slider.style.left = `${(inputTo-props.min)/(props.max-props.min)*100}%`;
        }else{
            display.innerHTML = `${inputFrom}-${inputTo}`;
            slider.style.right = `${100-(inputTo-props.min)/(props.max-props.min)*100}%`;
            slider.style.left = `${(inputFrom-props.min)/(props.max-props.min)*100}%`;
        }
        

    }, [inputFrom,inputTo,props])
    

  return (
    <div>
        <div class="range-slider">
            <span class="range-selected" id={`slider-${props.forid}`}></span>
        </div>
        <div class="range-input">
            <input type="range" 
            onChange={(e)=>setInputFrom(e.target.value)}
            min={props.min}
            max={props.max}
            step={props.step}
            defaultValue={props.min}/>
            <input type="range"
            onChange={(e)=>setInputTo(e.target.value)}
            min={props.min}
            max={props.max}
            step={props.step}
             defaultValue={props.max}/>
        </div>
    </div>
  )
}
