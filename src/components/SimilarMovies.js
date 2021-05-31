import React from 'react'
import { Link } from 'react-router-dom'
import StarHalfIcon from '@material-ui/icons/StarHalf'

function SimilarMovies({ similar }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="flex pb-10 flex-col justify-center items-center pr-4">
            <h1 className="overflow-hidden text-xl md:text-3xl">Similar Movies</h1>
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 md:pt-10 xl:gap-10">
                {similar.slice(0,6).map(movie => (
                    <div key={movie.id} className="bg-black-full flex flex-col justify-center text-center items-center relative rounded-md h-20 w-36 sm:w-48 sm:h-28 md:w-60 md:h-36 lg:w-80 lg:h-48 xl:w-96 xl:h-56">
                        <Link to={`/movie/${movie.id}`}>
                            <img 
                                src={
                                `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                `${BASE_URL}${movie.poster_path}`
                                } 
                                alt="" 
                                className="absolute inset-0 min-h-full max-h-full min-w-full object-cover shadow-md hover:opacity-10 rounded-md"/>
                            <h2 className="overflow-hidden text-xs sm:text-base lg:text-xl font-semibold xl:text-2xl">{movie.title}</h2>
                            <p className="overflow-hidden text-xs sm:text-sm lg:text-base xl:text-lg">{movie.release_date.slice(0, 4)}.</p>

                                
                            
                        </Link>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default SimilarMovies
