import React from 'react'
import MovieCard from './Components/MovieCard/MovieCard'
const MoviesList = ({MoviesData}) => {
  return (
    <div>
        {
            MoviesData.map((movie ,index)=><MovieCard movie ={movie} key={index}/>)
         }
    </div>
  )
}

export default MoviesList