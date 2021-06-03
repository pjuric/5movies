import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from './components/Loading'

function GenreMovies() {
    const { id } = useParams()
    const { name } = useParams()
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [genre, setGenre] = useState([])
    const [loading, setLoading] = useState(true)

    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&with_genres=${id}`

    useEffect(() => {
        const getGenre = () => axios.get(urlGenre)
        async function fetchData() {
          const newgenre = await getGenre()
          setGenre(newgenre.data.results)
          setLoading(false)
          return newgenre;
        }
        fetchData();
      }, [urlGenre])

    return (
        <div className="bg-bg-main pt-14 md:pt-20 xl:pt-28 pb-10">
            {loading ? <Loading/> : 
            <div className="flex flex-col justify-center items-center">
                <h1 className="overflow-hidden text-xl md:text-2xl xl:text-3xl xl:h-14 my-10">Trending <b>{name}</b> Movies</h1>
                <div className="space-y-10 md:space-y-0 sm:grid md:grid-cols-2 md:gap-3 lg:gap-20 xl:gap-20 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                    {genre.slice(0, 18).map(movie => (
                        <div key={movie.id} className="flex overflow-hidden border-white-secondary md:border-none border-b-2 pb-5 flex-col justify-center items-center w-80 sm:w-96 h-72 xl:h-80">  
                            <div className="bg-black-full overflow-hidden cursor-pointer flex flex-col justify-center transition duration-200 ease-in transform hover:scale-105 hover:z-50 text-center items-center relative rounded-md w-full h-full">
                                <Link to={`/movie/${movie.id}`}>
                                    <img 
                                        src={
                                            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                            `${BASE_URL}${movie.poster_path}`
                                        } 
                                        alt="" 
                                        className="absolute inset-0  min-h-full max-h-full min-w-full max-w-full object-cover shadow-md hover:opacity-10 rounded-md"
                                    />  
                                    <p className="overflow-hidden line-clamp-6 text-xs sm:text-sm self-center px-5 pt-3">{movie.overview}.</p>
                                </Link>
                            </div>
                            <h2 className="h-14 text-center lg:h-16 xl:h-24 pt-5 overflow-hidden text-lg sm:text-base lg:text-xl">{movie.title} {movie.release_date ? <i className="text-white-primary text-base sm:text-sm lg:text-lg">({movie.release_date.slice(0, 4)}.)</i> : <></>}</h2>
                        </div>
                        
                    ))}
                </div> 
            </div>
            }
        </div>
    )
}

export default GenreMovies
