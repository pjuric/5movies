import React from 'react'
import { Link } from 'react-router-dom'

function Genres({ genres }) {
    // console.log(genres)
    return (
        <div className="flex flex-col justify-center items-center md:flex-row pt-10">
            <div className="flex flex-col text-white-primary justify-center items-center p-2 space-y-2 sm:space-y-4 xl:w-4/6">
                <h2 className="overflow-hidden text-xl sm:text-3xl h-12 lg:text-4xl xl:text-5xl xl:h-24">Search your favourite genres</h2>
                <div className="grid grid-cols-3 gap-2 items-center justify-center sm:auto-cols-min sm:gap-4 lg:text-xl xl:grid-cols-6 xl:gap-6">
                    {genres.slice(0, 18).map(genre => (
                        <div key={genre.id}>
                            <Link to={`/genre/${genre.id}`}>
                                <p className="hover:text-white-primary break-normal text-center cursor-pointer">{genre.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <img
                src="./images/bed.svg"
                alt="Genres"
                className="p-10 flex-1"
            />
        </div>
    )
}

export default Genres
