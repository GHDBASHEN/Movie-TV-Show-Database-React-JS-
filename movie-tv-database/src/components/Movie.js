import React, { useEffect , useState } from 'react'

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
      {movieList.map((movie)=>(
        
        <img style ={{width:"380px",height:"250px"}} key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      ))}
      
    </div>
  )
}

export default Movie;
