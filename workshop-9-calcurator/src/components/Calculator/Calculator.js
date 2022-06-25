import { useState } from "react";
import "./Calculator.css"

const Calculator = () => {

    const [inputValue, setInputValue] = useState("0");
    
    const displayValue = (input) => {
        if(inputValue.toString().charAt(0) === "0"){
            setInputValue(input);
        }else{
            setInputValue(inputValue + input);
        }
    }

    const reset = () => {
        setInputValue("0");
    }

    const calculate = () => {
        // eslint-disable-next-line
        const result = eval(inputValue);
        setInputValue(result);
        
    }

    return(
        <div className="calculator">
            <div className="calculator-display">
                <h1>{inputValue}</h1>
            </div>
            <div className="calculator-keypad">
                <button className="operator" onClick={()=>displayValue('+')}>+</button>
                <button className="operator" onClick={()=>displayValue('-')}>-</button>
                <button className="operator" onClick={()=>displayValue('*')}>x</button>
                <button className="operator" onClick={()=>displayValue('/')}>/</button>
                <button className="number" onClick={()=>displayValue('7')}>7</button>
                <button className="number" onClick={()=>displayValue('8')}>8</button>
                <button className="number" onClick={()=>displayValue('9')}>9</button>
                <button className="number" onClick={()=>displayValue('4')}>4</button>
                <button className="number" onClick={()=>displayValue('5')}>5</button>
                <button className="number" onClick={()=>displayValue('6')}>6</button>
                <button className="number" onClick={()=>displayValue('1')}>1</button>
                <button className="number" onClick={()=>displayValue('2')}>2</button>
                <button className="number" onClick={()=>displayValue('3')}>3</button>
                <button className="number" onClick={()=>displayValue('.')}>.</button>
                <button className="number" onClick={()=>displayValue('0')}>0</button>
                <button className="clear-btn" onClick={()=>reset()}>AC</button>
                <button className="equal operator" onClick={()=>calculate()}>=</button>
            </div>
        </div>
    )

}

export default Calculator;