import { useState, useEffect } from 'react';
import './Page.css';
import { filterByDirector, getListOf } from '../helpers/film.helpers';

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setFilms(data);
    })
    .catch((error) => {
      console.error(err);
    })
  }, []);

  const filteredFilms = filterByDirector(films, searchDirector);
  const allDirectors = getListOf(films, "director");

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className='formGroup'>
            <label htmlFor="directorSelect">Filter by director</label>
            <select
             name="directorSelect" 
             id="directorSelect"
             value={searchDirector}
             onChange={(event) => {
                setSearchDirector(event.target.value);
             }}
             >
                <option value="">All</option>
                {allDirectors.map((director, index) => {
                    return <option value={director} key={index}>{director}</option>
                })}
             </select>
        </div>
      </form>
      <ul>
      {filteredFilms.map((film) => {
          return (
            <li key={film.id} className='movieCard'>
              <div>
                <h2>{film.title}</h2>
                <p>Released: {film.release_date}</p>
                <p>Rotten Tomatoes score: {film.rt_score}</p>
                <p>Directed by: {film.director}</p>
                <p>{film.description}</p>
              </div>
              
              
            </li>
          )
      })}
      </ul>
    </>
  )
}

export default FilmsPage;
