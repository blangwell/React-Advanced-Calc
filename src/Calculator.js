import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    // 4 main operators (store in state)
    let [operand, setOperand] = useState(null)
    // 0-9 store numerical vals in state
    let [firstNum, setFirstNum] = useState(0)
    let [secondNum, setSecondNum] = useState(0)
    let [solution, setSolution] = useState(0)

    // equals button - evaluate answers
    // error messages if user makes a mistake
    // show number of current state

    // DONT ALLOW ZERO AS FIRST NUMBER
    // if (numVal.length === 0) setNumVal(0)

    let mutateFirstNum = []
    let mutateSecondNum = []
    
    let updateCalc = (num) => {
        // TODO shift number clicked into mutateNum array
        if (operand == null) {
            mutateFirstNum.unshift(num)
            console.log(mutateFirstNum)
        }
        else setSecondNum(num)
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
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('x')}
                    >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('-')}
                    >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button"
                    onClick={() => {updateCalc(3)}}
                    >3</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => setOperand('+')}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator