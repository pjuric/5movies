import React from 'react'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import { Link } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language'
import PeopleIcon from '@material-ui/icons/People'

function Thumbnail({ movie }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const id = movie.id
    return (
        <div className="transition duration-200 ease-in transform hover:scale-95 hover:z-50 space-y-1 md:space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
            <Link to={`/movie/${id}`}>
            <img 
                alt=""
                src={
                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                    `${BASE_URL}${movie.poster_path}`
                }
                className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-10 shadow-lg"
            />
            <h2 className="hidden sm:block sm:h-14 overflow-hidden text-xs text-center sm:text-base lg:text-xl font-semibold xl:text-3xl">{movie.title}</h2>
            <div className="hidden sm:flex space-x-10 pt-2">
                <div className="flex items-center space-x-2">
                    <StarHalfIcon/>
                    <p>{movie.vote_average}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <PeopleIcon/>
                    <p>{movie.vote_count}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <LanguageIcon/>
                    <p className="uppercase">{movie.original_language}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Thumbnail
