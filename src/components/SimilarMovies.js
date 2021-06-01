import React from 'react'
import { Link } from 'react-router-dom'

function SimilarMovies({ similar }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="flex pb-10 flex-col justify-center items-center pr-4">
            <h1 className="overflow-hidden text-xl md:text-3xl">Similar Movies</h1>
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 md:pt-10 lg:gap-10">
                {similar.slice(0,6).map(movie => (
                    <div key={movie.id} className="flex flex-col items-center justify-center">
                        <div className="bg-black-full h-20 w-36 sm:w-48 sm:h-28 md:w-60 md:h-36 lg:w-80 lg:h-48 xl:w-96 xl:h-56 flex flex-col justify-center text-center items-center relative rounded-md transition duration-200 ease-in transform hover:scale-105 hover:z-50" >
                            <Link to={`/movie/${movie.id}`}>
                                <img 
                                    src={
                                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                    `${BASE_URL}${movie.poster_path}`
                                    } 
                                    alt="" 
                                    className="absolute inset-0 min-h-full max-h-full min-w-full object-cover shadow-md hover:opacity-10 rounded-md"/>
                                <p className="overflow-hidden line-clamp-6 text-xs sm:text-sm self-center px-5 pt-3">{movie.overview}.</p>   
                            </Link>
                        </div>
                        <h2 className="h-14 text-sm text-center lg:h-16 xl:h-24 pt-2 overflow-hidden sm:text-base lg:text-lg">{movie.title} ({movie.release_date.slice(0, 4)}.)</h2>  
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default SimilarMovies
