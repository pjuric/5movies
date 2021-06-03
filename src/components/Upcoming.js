import React from 'react'
import { Link } from 'react-router-dom'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

function Upcoming({ movies }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="w-screen pt-10 flex flex-col justify-center items-center pb-10">
            <h2 className="overflow-hidden w-full text-center text-xl sm:text-3xl h-12 lg:h-20 lg:text-4xl xl:text-5xl xl:h-24">Take a peek and see what's coming</h2>
            <div className="space-y-7 lg:space-y-0 flex flex-col lg:flex-row justify-center items-center">
                {movies.slice(0,3).map(movie => (
                    <div key={movie.id} className="border-b-2 mx-20 pr-3 border-dotted border-opacity-50 lg:border-none lg:mx-3 xl:mx-5">
                        <Link to={`/movie/${movie.id}`}>
                            <div className="relative overflow-hidden bg-black-primary flex justify-center items-center w-72 h-40 sm:w-full sm:h-60 md:h-80 lg:w-96 ">
                                <img src={
                                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                    `${BASE_URL}${movie.poster_path}`}
                                    alt=""
                                    className="sm:hover:opacity-10 transform sm:hover:scale-105 shadow-lg overflow-hidden absolute inset-0 min-h-full min-w-full object-cover" 
                                />
                                <p className="overflow-hidden line-clamp-6 text-xs sm:text-sm self-center px-5 text-center">{movie.overview}.</p>
                            </div>
                        </Link>
                        <h2 className="h-14 text-center lg:h-16 xl:h-24 pt-5 overflow-hidden text-lg sm:text-base lg:text-xl">{movie.title}</h2>
                    </div>
                ))}
                <div>
                    <Link to={`/upcoming`}>
                        <div className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-16 h-7 text-md font-semibold rounded-sm lg:w-16 flex justify-center items-center"><MoreHorizRoundedIcon/></div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Upcoming
