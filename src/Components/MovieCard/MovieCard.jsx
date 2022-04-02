import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <div className='my-card'>
      <img src={movie.posterURL} alt="" style={{ width:'200px'}}/>
      <h3>{movie.title}</h3> 
      <h5 >{movie.description}</h5>
      <h2>{"⭐".repeat(movie.rating)}</h2>

    </div>
  )
}

export default MovieCard