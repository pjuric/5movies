import React from 'react'
import { Link } from 'react-router-dom'

function Collection({ collection }) {
    const id = collection.id
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="w-screen flex flex-col justify-center items-center space-y-5 lg:space-y-10 h-96">
            <h1 className="overflow-hidden text-center text-xl md:text-3xl md:h-16">Check out {collection.name}</h1>
            <div className="relative w-full h-52 sm:h-80 md:h-96 lg:h-2/3 xl:h-5/6">
            <Link to={`/collection/${id}`}>
                <img
                    src={
                        `${BASE_URL}${collection.backdrop_path || collection.poster_path}` ||
                        `${BASE_URL}${collection.poster_path}`
                    }
                    className="min-w-full h-full absolute inset-0 lg:w-auto object-cover cursor-pointer transform hover:opacity-80"
                    alt="poster"
                />
            </Link>
            </div>
        </div>
    )
}

export default Collection
