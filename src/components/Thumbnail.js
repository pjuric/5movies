import React from 'react'
import StarHalfIcon from '@material-ui/icons/StarHalf'

function Thumbnail({ movie }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="space-y-1 md:space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
            <img 
                alt=""
                src={
                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                    `${BASE_URL}${movie.poster_path}`
                }
                className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-10 shadow-md"
            />
            <h2 className="overflow-hidden text-xs sm:text-base lg:text-xl font-semibold xl:text-3xl">{movie.title}</h2>
            <div className="flex items-center space-x-2 lg:text-lg">
                <StarHalfIcon/>
                <p>{movie.vote_average}</p>
            </div>
        </div>
    )
}

export default Thumbnail
