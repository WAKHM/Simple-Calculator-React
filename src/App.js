import React, {useState} from 'react'
import './App.css';


function App() {
  const [value, catchValue] = useState('');

  const clickButton = (e) => {
    const display = e.target.value;
    const operators = ['/','*','-','+'];

    if (display === 'AC'){
      catchValue('');
    }else if (display === 'DEL'){
      if (value.length > 0) {
        catchValue(value.slice(0, -1));
      }
    }else if (display == '%'){
      catchValue((parseFloat(value) / 100).toString());
    }else if (display === '='){
      try{
        if (value.includes('/0')) {
          catchValue('Cannot divided by zero');
        }else{
          catchValue(eval(value));
        }
      } catch (err){
        catchValue('Error');
      }
    }else{
      if (operators.includes(display)){
        if (value === '' || operators.includes(value.slice(-1))){
          catchValue(value.slice(0, -1) + display);
        } else{
          catchValue(value + display);
        }
      }else{
        catchValue(value + display);
      }
    }

  };

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='display-box'>
          <input type="text" className='display' value={value} />
        </div>
        
        <div class="buttons">
            <button class="operator" value="AC" onClick={clickButton}>AC</button>
            <button class="operator" value="DEL" onClick={clickButton}>DEL</button>
            <button class="operator" value="%" onClick={clickButton}>%</button>
            <button class="operator" value="/" onClick={clickButton}>/</button>

            <button value="7" onClick={clickButton}>7</button>
            <button value="8" onClick={clickButton}>8</button>
            <button value="9" onClick={clickButton}>9</button>
            <button class="operator" value="*" onClick={clickButton}>*</button>

            <button value="4" onClick={clickButton}>4</button>
            <button value="5" onClick={clickButton}>5</button>
            <button value="6" onClick={clickButton}>6</button>
            <button class="operator" value="-" onClick={clickButton}>-</button>

            <button value="2" onClick={clickButton}>2</button>
            <button value="1" onClick={clickButton}>1</button>
            <button value="3" onClick={clickButton}>3</button>
            <button class="operator" value="+" onClick={clickButton}>+</button>

            <button value="0" onClick={clickButton}>0</button>
            <button value="00" onClick={clickButton}>00</button>
            <button value="." onClick={clickButton}>.</button>
            <button class="operator" value="=" onClick={clickButton}>=</button>
        </div>

      </div>
      
    </div>
  
    
  );
}

export default App;
