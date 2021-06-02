import React from 'react'
import Thumbnail from './Thumbnail';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Link } from 'react-router-dom';

function Featured({ movies, rated }) {
    return (
        <div className="w-screen p-5 flex space-x-5 sm:space-x-10 lg:flex-col lg:space-y-10 lg:p-8 lg:space-x-0">
            <div className="space-y-3 flex flex-col items-center lg:items-baseline w-full">
                <h2 className="font-semibold sm:text-2xl">Now Trending</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0 w-full">
                    {movies.slice(1, 4).map(movie => (
                        <Thumbnail key={movie.id} id={movie.id} movie={movie}/>
                    ))}
                    <div>
                        <Link to={`/trending`}>
                            <div className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-16 h-7 text-md font-semibold rounded-sm lg:w-36 flex justify-center items-center"><MoreHorizRoundedIcon/></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="space-y-3 flex flex-col items-center lg:items-baseline w-full">
                <h2 className="font-semibold sm:text-2xl">Top Rated</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0 w-full">
                    {rated.slice(0, 3).map(movie => (
                        <Thumbnail key={movie.id} id={movie.id} movie={movie}/>
                    ))}
                    <div>
                        <Link to={`/toprated`}>
                            <div className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-16 h-7 text-md font-semibold rounded-sm lg:w-36 flex justify-center items-center"><MoreHorizRoundedIcon/></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
