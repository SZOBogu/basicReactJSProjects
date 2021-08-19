import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Baneposts from "./Baneposts"
import UnfunnyJokes from "./UnfunnyJokes"
import NavBar from "./NavBar"
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route path="/" component={Home}/>
        <Route path="/bane" component={Baneposts}/>
        <Route path="/jokes" component={UnfunnyJokes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
