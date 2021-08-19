import React, {Component} from 'react';
import logo from '../icarenot.jpg';


class BoromirComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  handleYayButton(){
    this.setState({
      count: this.state.count + 1
    })
  }

  handleNayButton(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Did moon landing really happen?</h1>
        <h2>Take your vote lad</h2>
        <h1 class = "counter">{this.state.count}</h1>
        <button class = "button" onClick={() => this.handleYayButton()}>Obviously you fucking retard</button>
        <button class = "button" onClick={() => this.handleNayButton()}>Fuck no, this is a fraud dumbass</button>
      </div>
    );
  }
}

export default BoromirComponent;
