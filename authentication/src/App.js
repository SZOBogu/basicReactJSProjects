import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bebech from './bebech.jpg'
import React, {useState} from 'react'

function App() {

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  const handleForm = (e) => {
    if(email == "stachursky@niepokorny.typ" && password == "toja"){
      alert("Potezna wichura lamiac duze drzewa trzcina zaledwie tylko kolysze")
    }
    else{
      alert("W ogole cnetralnie kamieniem go bez kitu")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login form in ReactJS</h1>
      </header>


      <div className="row">
          <div className="col-md-6">
            <img className="float-right" src={bebech}/>
          </div>

          <div className="col-md-6 my-auto bg-dark p-5">
            <form onSubmit={handleForm}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" 
                  value={email} className="form-control" id="exampleInputEmail1" 
                  aria-describedby="emailHelp" placeholder="Enter email"
                  onChange={(email)=>setEmail(email.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else. Probably.</small>
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" value={password} className="form-control" id="exampleInputPassword1" 
                  placeholder="Password"
                  onChange={(password)=>setPassword(password.target.value)}
                />
              </div>
              <br/>
              <button type="submit" className="btn btn-primary">Get in loser</button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
