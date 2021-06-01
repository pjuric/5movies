import React from 'react'

function MovieVideos({ videos }) {
    return (
        <div className="h-auto mb-10 bg-bg-main pl-8 pr-10 space-y-4 sm:space-y-0 flex flex-col justify-center items-center">
                <h1 className="overflow-hidden text-xl md:text-3xl">Featured Videos</h1>
            <div className="pt-4 space-y-4 sm:grid grid-cols-2 sm:space-y-0 gap-3 md:gap-10 xl:grid-cols-3 md:pt-10">
                {videos.slice(0, 3).map(video => (
                    <iframe 
                        key={video.id}
                        className="h-auto w-auto object-cover lg:w-96 lg:h-60" 
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>   
                    </iframe>
                ))}
            </div>
        </div>
    )
}

export default MovieVideos
