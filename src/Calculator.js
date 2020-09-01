import React, { useState } from 'react'

let mutateFirstNum = '0'

const Calculator = props => {
    // Declare state variables
    let [operand, setOperand] = useState('')
    let [firstNum, setFirstNum] = useState('')
    let [secondNum, setSecondNum] = useState('')
    let [solution, setSolution] = useState('')
    let [calcMessage, setCalcMessage] = useState('')
    
    // DONE 4 main operators (store in state)
    // done? 0-9 store numerical vals in state
    // DONE equals button - evaluate answers
    // DONE DONT ALLOW ZERO AS FIRST NUMBER

    // show number of current state

    
    // CONCAT THE NUMBERS
    // CONCAT RETURNS A NEW ARRAY

    let displayCalc = () => {
        if (operand === '' && solution === '') return firstNum
        else if (operand !== '' && solution === '') return secondNum
        else if (solution !== '') return solution
    }

    let updateCalc = (num) => {
        if (operand === '') {
            if (firstNum.length === 0) {
                setSolution('');
                setFirstNum(num);
            } else {
                setFirstNum(firstNum.concat(num));
            }
        } else {
            if (secondNum.length === 0) {
                console.log('second num : ', num)
                setSecondNum(num)
            } else {
                setSecondNum(secondNum.concat(num))
            }
        }
    }

    let handleZero = (e) => {
        if (operand === '' && firstNum.length > 0) {
            setFirstNum(firstNum.concat(0))
        } else if (operand !== '' && secondNum.length > 0) {
            setSecondNum(secondNum.concat(0))
        }
    }


    let updateOperand = (e) => {
        let thisOperand = e.target.innerText;
        operand == '' ? setOperand(thisOperand)
        : setCalcMessage('only one operand plz');
    }

    let solve = () => {
        setFirstNum('')
        setSecondNum('')
        setOperand('')
        if (operand === '+') setSolution(parseInt(firstNum) + parseInt(secondNum))
        else if (operand === '-') setSolution(parseInt(firstNum) - parseInt(secondNum))
        else if (operand === '*') setSolution(parseInt(firstNum) * parseInt(secondNum))
        else if (operand === '/') setSolution(parseInt(firstNum) / parseInt(secondNum))
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{displayCalc()}</div>
                <div className="calc-row">
                    {/* // DONE clear button (clear state) */}
                    <button className="calc-button calc-button-top"
                    onClick={() => {
                        setFirstNum('') 
                        setSecondNum('') 
                        setSolution('') 
                        setOperand('')}}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('/')}
                    >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => {updateCalc('7')}}
                    >7</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('8')}}
                    >8</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('9')}}
                    >9</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('*')}
                    >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => {updateCalc('4')}}
                    >4</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('5')}}
                    >5</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('6')}}
                    >6</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('-')}
                    >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => {updateCalc('1')}}
                    >1</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('2')}}
                    >2</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc('3')}}
                    >3</button>
                    <button className="calc-button calc-button-op"
                    onClick={(e) => updateOperand(e)}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"
                    onClick={handleZero}
                    >0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op"
                    onClick={solve}
                    >=</button>
                </div>
            </div>
            <h3>{calcMessage}</h3>
        </div>
    )
}

export default Calculator