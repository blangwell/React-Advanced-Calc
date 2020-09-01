import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    // 4 main operators (store in state)
    let [operand, setOperand] = useState(null)
    // 0-9 store numerical vals in state
    let [firstNum, setFirstNum] = useState(null)
    let [secondNum, setSecondNum] = useState(null)
    let [solution, setSolution] = useState(null)

    // equals button - evaluate answers
    // error messages if user makes a mistake
    // show number of current state

    // DONT ALLOW ZERO AS FIRST NUMBER
    // if (numVal.length === 0) setNumVal(0)

    let mutateFirstNum = []
    let mutateSecondNum = []
    
    let updateCalc = (num) => {
        // TODO push number clicked into mutateNum array
        if (firstNum == null) {
            mutateFirstNum.push(num)
            // let arrayToNum = parseInt(mutateFirstNum.join(''))
            // setFirstNum(arrayToNum)
            console.log(mutateFirstNum)
        } else {
            mutateSecondNum.push(num)
            console.log(mutateSecondNum)
        }
    }

    let handleZero = () => {
        if (operand == null && mutateFirstNum.length > 0) {
            mutateFirstNum.push(0)
            console.log(mutateFirstNum)
        } else if (operand != null & mutateSecondNum.length > 0) {
            mutateSecondNum.push(0)
            console.log(mutateSecondNum)
        }
    }

    let handleOperand = (operand) => {
        if (operand === null && secondNum === null) {
            setOperand(operand)
            // let arrayToNum = parseInt(mutateFirstNum.join(''))
            // setFirstNum(arrayToNum)
            // console.log(arrayToNum)
        } else if (operand != null) {
            console.log('one at a time doofus')
        }
        // make a single number out of the array value
    }

    let solve = () => {
        
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{firstNum}</div>
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
                    onClick={() => {updateCalc(7)}}
                    >7</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(8)}}
                    >8</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(9)}}
                    >9</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('x')}
                    >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => {updateCalc(4)}}
                    >4</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(5)}}
                    >5</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(6)}}
                    >6</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('-')}
                    >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => {updateCalc(1)}}
                    >1</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(2)}}
                    >2</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(3)}}
                    >3</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleOperand('+')}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"
                    onClick={handleZero}
                    >0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator