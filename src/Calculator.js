import React, { useState } from 'react'

let mutateFirstNum = '0'

const Calculator = props => {
    // Declare state variables
    // DONE 4 main operators (store in state)
    let [operand, setOperand] = useState('')
    // done? 0-9 store numerical vals in state
    let [firstNum, setFirstNum] = useState('')
    let [secondNum, setSecondNum] = useState('')
    let [solution, setSolution] = useState('')
    let [calcMessage, setCalcMessage] = useState('')

    // DONE equals button - evaluate answers

    // error messages if user makes a mistake


    // show number of current state

    // DONT ALLOW ZERO AS FIRST NUMBER
    
    // CONCAT THE NUMBERS


    // CONCAT RETURNS A NEW ARRAY
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

    let updateOperand = (e) => {
        let thisOperand = e.target.innerText;
        operand == '' ? setOperand(thisOperand)
        : setCalcMessage('only one operand plz');
    }

    // let handleZero = () => {
    //     if (operand == null && mutateFirstNum.length > 0) {
    //         mutateFirstNum.push(0)
    //         console.log(mutateFirstNum)
    //     } else if (operand != null & mutateSecondNum.length > 0) {
    //         mutateSecondNum.push(0)
    //         console.log(mutateSecondNum)
    //     }
    // }

    let solve = () => {
        setFirstNum('')
        setSecondNum('')
        setOperand('')
        if (operand === '+') setSolution(firstNum + secondNum)
        else if (operand === '-') setSolution(firstNum - secondNum)
        else if (operand === '*') setSolution(firstNum * secondNum)
        else if (operand === '/') setSolution(firstNum / secondNum)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{solution}</div>
                <div className="calc-row">
                    {/* // DONE clear button (clear state) */}
                    <button className="calc-button calc-button-top"
                    onClick={() => {
                        setFirstNum(0) 
                        setSecondNum(0) 
                        setSolution(0) 
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
                    // onClick={handleZero}
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