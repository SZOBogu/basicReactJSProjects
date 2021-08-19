import logo from './icarenot.jpg';
import './App.css';
import React, {Component} from 'react';
import BoromirComponent from "./components/BoromirComponent";
import "./styles/styles.css"


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BoromirComponent/>
        </header>
      </div>
    );
  }
}

export default App;
