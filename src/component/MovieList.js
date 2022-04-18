import React from 'react'
import MovieCard from './MovieCard';

function MovieList({Data}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "38px" }}> 
    {
        Data.map((movie)=> <MovieCard movie={movie}/> )
    }
    </div>
  )
}

export default MovieList