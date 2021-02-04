import {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNum: 0
    }
  }
  render() {
    return(
      <div>
        <h1>React Advanced Calc</h1>
      </div>
    )
  }
}