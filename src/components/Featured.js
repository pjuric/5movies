import React from 'react'

function Featured({ movies }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="p-10 flex space-x-5 sm:space-x-10 lg:flex-col lg:space-y-10 lg:p-8 lg:space-x-0">
            <div className="space-y-3 flex flex-col items-center lg:items-baseline">
                <h2 className="font-semibold sm:text-2xl">Now Trending</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0">
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[1].backdrop_path || movies[1].poster_path}` ||
                            `${BASE_URL}${movies[1].poster_path}`
                        }
                        className="rounded-md cursor-pointer hover:opacity-50 w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[2].backdrop_path || movies[2].poster_path}` ||
                            `${BASE_URL}${movies[2].poster_path}`
                        }
                        className="rounded-md w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[3].backdrop_path || movies[3].poster_path}` ||
                            `${BASE_URL}${movies[3].poster_path}`
                        }
                        className="rounded-md w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <button className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-24 h-7 text-md font-semibold rounded-sm md:w-40 md:h-10 md:text-lg lg:text-base xl:w-64">More</button>
                </div>
            </div>
            <div className="space-y-3 flex flex-col items-center lg:items-baseline">
                <h2 className="font-semibold sm:text-2xl">Now Trending</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0">
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[1].backdrop_path || movies[1].poster_path}` ||
                            `${BASE_URL}${movies[1].poster_path}`
                        }
                        className="rounded-md w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[2].backdrop_path || movies[2].poster_path}` ||
                            `${BASE_URL}${movies[2].poster_path}`
                        }
                        className="rounded-md w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <img 
                        alt=""
                        src={
                            `${BASE_URL}${movies[3].backdrop_path || movies[3].poster_path}` ||
                            `${BASE_URL}${movies[3].poster_path}`
                        }
                        className="rounded-md w-full lg:w-auto lg:h-52 xl:h-auto xl-w-auto"
                    />
                    <button className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-24 h-7 text-md font-semibold rounded-sm md:w-40 md:h-10 md:text-lg lg:text-base xl:w-64">More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
