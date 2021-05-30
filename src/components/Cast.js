import React from 'react'

function Cast({ credits }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="mb-10 sm:mb-14">
            <div className="flex justify-center">
                <h1 className="overflow-hidden text-xl md:text-3xl">Cast</h1>
            </div>
            <div className="flex pt-4 justify-evenly md:pt-10">
                {credits.slice(0, 5).map(credit => (
                    <div key={credit.id} className="flex flex-col justify-center items-center">
                        <a className="" href="/"><img className="h-20 rounded-md sm:h-32 md:h-40 lg:h-60 xl:h-80" alt="" src={`${BASE_URL}${credit.profile_path}`}/></a>
                        <div className="text-center hidden lg:block">
                            <p className="lg:text-lg">{credit.name}</p>
                            <p className="italic">({credit.character})</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cast
