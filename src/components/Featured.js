import React from 'react'
import StarHalfIcon from '@material-ui/icons/StarHalf'

function Featured({ movies }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="w-screen p-10 flex space-x-5 sm:space-x-10 lg:flex-col lg:space-y-10 lg:p-8 lg:space-x-0">
            <div className="space-y-3 flex flex-col items-center lg:items-baseline w-full">
                <h2 className="font-semibold sm:text-2xl">Now Trending</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0 w-full">
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[1].backdrop_path || movies[1].poster_path}` ||
                                `${BASE_URL}${movies[1].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[1].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[1].vote_average}</p>
                        </div>
                    </div>
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[2].backdrop_path || movies[2].poster_path}` ||
                                `${BASE_URL}${movies[2].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[2].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[2].vote_average}</p>
                        </div>
                    </div>
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[3].backdrop_path || movies[3].poster_path}` ||
                                `${BASE_URL}${movies[3].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[3].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[3].vote_average}</p>
                        </div>
                    </div>
                    <button className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-24 h-7 text-md font-semibold rounded-sm md:w-40 md:h-10 md:text-lg lg:text-base xl:w-64">More</button>
                </div>
            </div>
            <div className="space-y-3 flex flex-col items-center lg:items-baseline w-full">
                <h2 className="font-semibold sm:text-2xl">Now Trending</h2>
                <div className="space-y-3 flex flex-col items-center lg:flex-row lg:space-x-3 lg:space-y-0 w-full">
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[4].backdrop_path || movies[4].poster_path}` ||
                                `${BASE_URL}${movies[4].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[4].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[4].vote_average}</p>
                        </div>
                    </div>
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[5].backdrop_path || movies[5].poster_path}` ||
                                `${BASE_URL}${movies[5].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[5].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[5].vote_average}</p>
                        </div>
                    </div>
                    <div className="space-y-3 oveflow-hidden relative text-white-primary rounded-md cursor-pointer bg-black-full h-16 sm:h-28  w-full lg:h-52 xl:h-64 xl:w-full flex flex-col justify-center items-center">
                        <img 
                            alt=""
                            src={
                                `${BASE_URL}${movies[6].backdrop_path || movies[6].poster_path}` ||
                                `${BASE_URL}${movies[6].poster_path}`
                            }
                            className="absolute inset-0 min-h-full max-h-full min-w-full object-cover z-0 hover:opacity-30"
                        />
                        <h2 className="overflow-hidden text-lg lg:text-xl font-semibold xl:text-3xl">{movies[6].title}</h2>
                        <div className="flex items-center space-x-2 lg:text-lg">
                            <StarHalfIcon/>
                            <p>{movies[6].vote_average}</p>
                        </div>
                    </div>
                    <button className="bg-black-primary bg-opacity-50 hover:bg-opacity-70 w-24 h-7 text-md font-semibold rounded-sm md:w-40 md:h-10 md:text-lg lg:text-base xl:w-64">More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
