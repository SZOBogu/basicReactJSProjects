import './App.css';
import NavBar from './NavBar';
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';
import MyContextProvider from './MyContext';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <MyContextProvider>
      <div className="App">
          <NavBar/>
          <button className="btn btn-primary">Do shit</button>
          <ExerciseForm/>
          <ExerciseList/>
      </div>
    </MyContextProvider>
  );
}

export default App;
