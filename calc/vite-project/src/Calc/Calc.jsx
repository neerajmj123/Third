import React,{useState} from "react";
import './Calc.css'
const Calc =()=>{
    const[input,setInput] =useState('')
    const handleButtonClick = (value)=>{
        if(value === '='){
            setInput(eval(input).toString())
        }else if(value === 'C'){
            setInput('')
        }else{
            setInput(input+value)
        }
    }

    return(
        <>
        <div className="calculator">
            <input type="text" name="" id=""  className="calcscreen" value={input}/>
            <div className="calcbtn">
                <button onClick={() => handleButtonClick('C')}>C</button>
                <button onClick={() =>handleButtonClick('/')}>/</button>
                <button onClick={() =>handleButtonClick('=')}>=</button>
                <button onClick={() =>handleButtonClick('0')}>0</button>
                <button onClick={() =>handleButtonClick('7')}>7</button>
                <button onClick={() =>handleButtonClick('8')}>8</button>
                <button onClick={() =>handleButtonClick('9')}>9</button>
                <button onClick={() =>handleButtonClick('*')}>*</button>
                <button onClick={() =>handleButtonClick('4')}>4</button>
                <button onClick={() =>handleButtonClick('5')}>5</button>
                <button onClick={() =>handleButtonClick('6')}>6</button>
                <button onClick={() =>handleButtonClick('-')}>-</button>
                <button onClick={() =>handleButtonClick('1')}>1</button>
                <button onClick={() =>handleButtonClick('2')}>2</button>
                <button onClick={() =>handleButtonClick('3')}>3</button>
                <button onClick={() =>handleButtonClick('+')}>+</button>
            </div>
        </div>
        </>
    )
}
export default Calc;