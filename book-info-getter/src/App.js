import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState} from 'react'
import axios from 'axios'


function App() {

  const [info, setInfo] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const [epoch, setEpoch] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = () => {
    const url = "https://wolnelektury.pl/api/books/" + title;
    axios.get(url).then(response => {
      const responseData = response.data
      setAuthor(response.data.author)
      setTitle(response.data.title)
      setCover(response.data.cover)
      setEpoch(response.data.epochs[0].name)
      setGenre(response.data.genres[0].name)
    })
  }

  return (
    <div className="App">
        <h1 className="bg-info p4">Some web scraping shit</h1>

        <div className="d-flex justify-content-center">
          <div className = "col-md-4 mt-5">
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} 
            placeholder = "What do you want to find?"  required/>
            <small id="emailHelp" class="form-text text-muted">
              Polish name of the book in lower case, whitespaces replaced by "-". For example: "ballady-i-romanse"</small>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-secondary px-5 mt-4">Find me some shit m8</button>
        <div className = "mt-5 continer-fuild d-flex justify-cntent-center">
          <div className="col-md04 bg-success p-2 rounded">
            <h1>{title} by {author}</h1>
            <h2>Epoch: {epoch}</h2>
            <h2>Genre: {genre}</h2>
            <img src = {cover}/>
          </div>
        </div>
    </div>
  );
}

export default App;
