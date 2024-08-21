import React, { useEffect , useState } from 'react'
import './Movie.css';
function Movie() {

    const [movieList,setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=0658213ac52a72bfc8c61e1c364db1a0")
        .then (res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()

    },[] )

    console.log(movieList)

  return (
    <div>
    <h1 className='heading'>
        Movie Ratings Blog
      </h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      
      {movieList.map((movie)=>(
        <div key={movie.id} style={{ marginBottom: '20px' }}>
        <img style ={{width:"300px",height:"250px"}} key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <p>Released: {movie.release_date}</p>
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default Movie;
