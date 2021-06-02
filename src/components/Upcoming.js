import React from 'react'
import { Link } from 'react-router-dom'

function Upcoming({ movies }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="w-screen pt-10 flex flex-col justify-center items-center pb-10">
            <h2 className="overflow-hidden w-full text-center text-xl sm:text-3xl h-12 lg:text-4xl xl:text-5xl xl:h-24">Take a peek and see what's coming</h2>
            <div className="space-y-7">
                {movies.slice(0,3).map(movie => (
                    <div key={movie.id} className="border-b-2 mx-20 pr-3 border-dotted border-opacity-50">
                        <Link to={`/movie/${movie.id}`}>
                            <div className="relative overflow-hidden bg-black-primary flex justify-center items-center w-72 h-40 sm:w-full sm:h-60 md:h-80">
                                <img src={
                                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                    `${BASE_URL}${movie.poster_path}`}
                                    alt=""
                                    className="sm:hover:opacity-10 overflow-hidden absolute inset-0 min-h-full min-w-full object-cover" 
                                />
                                <p className="overflow-hidden line-clamp-6 text-xs sm:text-sm self-center px-5 text-center">{movie.overview}.</p>
                            </div>
                        </Link>
                        <h2 className="h-14 text-center lg:h-16 xl:h-24 pt-5 overflow-hidden text-lg sm:text-base lg:text-xl">{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upcoming
