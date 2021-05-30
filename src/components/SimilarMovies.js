import React from 'react'
import { Link } from 'react-router-dom'

function SimilarMovies({ similar }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="flex pb-10 flex-col justify-center items-center pr-4">
            <h1 className="overflow-hidden text-xl md:text-3xl">Similar Movies</h1>
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 md:pt-10 xl:gap-10">
                {similar.slice(0,6).map(movie => (
                    <div key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img 
                                src={
                                `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                `${BASE_URL}${movie.poster_path}`
                                } 
                                alt="" 
                                className="w-36 shadow-md rounded-md sm:w-48 md:w-60 lg:w-80 xl:w-96"/>
                        </Link>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default SimilarMovies
