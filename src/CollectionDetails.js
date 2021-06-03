import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from './components/Loading'

function CollectionDetails() {
    const { id } = useParams()
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const three = "grid mt-5 sm:pr-8 grid-cols-2 lg:grid-cols-3 gap-3 px-3"
    const two = "grid mt-5 sm:pr-8 grid-cols-2 gap-3 px-3"
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [collection, setCollection] = useState([])
    const [length, setLength] = useState(2)
    const [loading, setLoading] = useState(true)

    const urlCollection = `https://api.themoviedb.org/3/collection/${id}?api_key=${API_KEY}&language=en-US`
    
    useEffect(() => {
        async function fetchData() {
            const details = await axios.get(urlCollection)
            setCollection(details.data)
            setLoading(false)
            return details;
        }
        fetchData();
    }, [urlCollection])

    useEffect(() => {
        const getCollection = () => axios.get(urlCollection)
        async function fetchData() {
          const details = await getCollection()
          setCollection(details.data)
          setLength(details.data.parts.length)
          setLoading(false)
          return details;
        }
        fetchData();
      }, [urlCollection])
    
    return (
        <div className="min-h-screen">
            {loading ? <Loading/> :
                <div className="w-screen">
                    <div className="w-full max-h-screen relative">
                        <img
                            src={
                                `${BASE_URL}${collection.backdrop_path || collection.poster_path}` ||
                                `${BASE_URL}${collection.poster_path}`
                            }
                            alt=""
                            className="shadow-lg w-full md:max-h-screen object-cover"
                        />
                        <div className="absolute px-5 top-0 w-full h-full bg-gradient-to-t text-center from-bg-main flex flex-col justify-end items-center pb-5 sm:pb-5">
                            <h1 className="overflow-hidden text-center text-xl md:text-2xl xl:text-3xl xl:h-10 my-10 uppercase font-semibold shadow-lg">{collection.name}</h1>
                            <p className="hidden sm:block">{collection.overview}</p>
                        </div>
                        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black-primary opacity-25">
                            
                        </div>
                    </div>
                    <div className={length > 2 ? `${three}` : `${two}`}>
                        {collection.parts.map(movie => (
                            <div key={movie.id} className="">
                                <Link to={`/movie/${movie.id}`}>
                                    <div className="">
                                        <img 
                                            src={
                                                `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                                                `${BASE_URL}${movie.poster_path}`}
                                            alt=""
                                            className="transform rounded-md sm:hover:scale-95 object-cover min-h-full"
                                        />
                                        <h2 className="h-14 text-sm text-center lg:h-16 xl:h-24 pt-2 overflow-hidden sm:text-base lg:text-lg">{movie.title}</h2> 
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default CollectionDetails
