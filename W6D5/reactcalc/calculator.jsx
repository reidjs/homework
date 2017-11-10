import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {result: "", num1: "", num2: ""};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.state.num1 = e.target.value;
    const num1 = parseInt(this.state.num1);
    this.setState({num1});
    // console.log(this.state.num1);
  }

  setNum2(e) {
    e.preventDefault();
    this.state.num2 = e.target.value;
    const num2 = parseInt(this.state.num2);
    this.setState({num2});
  }

  add(e) {
    e.preventDefault();
    this.state.result = this.state.num1 + this.state.num2;
    const result = this.state.result;
    this.setState({result});
  }

  subtract(e) {
    e.preventDefault();
    this.state.result = this.state.num1 - this.state.num2;
    const result = this.state.result;
    this.setState({result});
  }

  multiply(e) {
    e.preventDefault();
    this.state.result = this.state.num1 * this.state.num2;
    const result = this.state.result;
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    this.state.result = this.state.num1 / this.state.num2;
    const result = this.state.result;
    this.setState({result});
  }

  clear(e) {
    this.state.num1 = "";
    this.state.num2 = "";
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    this.setState({num1, num2});
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <label>number 1</label>
        <input onChange={this.setNum1} value={this.state.num1}></input>
        <label>number 2</label>
        <input onChange={this.setNum2} value={this.state.num2}></input>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>CLEAR</button>
      </div>
    );
  }
}

export default Calculator;
