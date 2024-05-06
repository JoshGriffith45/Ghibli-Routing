import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setFilm(data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
      {film.map((film) => {
          return (
            <li key={film.id}>
              <h2>{film.title}</h2>
              <div>
                <p>Released: {film.release_date}</p>
                <p>Rotten Tomatoes score: {film.rt_score}</p>
                <p>{film.description}</p>
              </div>
              
              
            </li>
          )
      })}
      </ul>
    </>
  )
}

export default App
