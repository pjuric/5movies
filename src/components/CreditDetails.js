import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from './Loading'

function CreditDetails() {
    const { id } = useParams()
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [credit, setCredit] = useState([])
    const [loading, setLoading] = useState(true)

    const urlCredit = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        const getCredit = () => axios.get(urlCredit)
        async function fetchData() {
          const cast = await getCredit()
          setCredit(cast.data)
          setLoading(false)
          return cast;
        }
        fetchData();
      }, [urlCredit])

    return (
        <div className="bg-bg-main pt-14 md:pt-20 xl:pt-28 h-screen w-screen relative">
            {loading ? <Loading/> : 
                <div className="p-5 h-full flex flex-col space-y-4">
                    <div className="flex justify-evenly space-x-3 md:space-x-0">
                        <img className="w-48 lg:w-60" alt="" src={`${BASE_URL}${credit.profile_path}`}/>
                        <div className="text-sm flex flex-col justify-evenly">
                            <h1 className="text-base sm:text-lg lg:text-4xl lg:h-16"><b>{credit.name}</b></h1>
                            {credit.birthday ?
                                <p className="text-sm lg:text-lg"><b>Born: </b>{credit.birthday} ({credit.place_of_birth})</p>
                            :<></>
                            }
                            {credit.deathday ?
                                <p className="text-sm lg:text-lg"><b>Died: </b>{credit.deathday}</p>
                            :<></>
                            }
                            {credit.popularity ?
                                <p className="text-sm lg:text-lg"><b>Popularity: </b>{credit.popularity}</p>
                            :<></>
                            }
                            <div className="flex space-x-4">
                                {credit.imdb_id ?
                                    <a className="bg-black-primary text-sm p-3 px-5 rounded-md hover:bg-opacity-90 lg:text-lg" target="_blank" rel="noreferrer" href={`https://www.imdb.com/name/${credit.imdb_id}/?ref_=nv_sr_srsg_0`}>IMDb</a>
                                :<></>
                                }
                                {credit.homepage ?
                                    <a className="bg-white-secondary text-sm text-black-full p-3 px-5 rounded-md hover:bg-opacity-90 lg:text-lg" target="_blank" rel="noreferrer" href={credit.homepage}>More</a>
                                :<></>
                                }
                            </div>
                        </div>
                        <img className="hidden lg:block lg:w-96" src="../images/awards.svg" alt=""/>
                    </div>
                    {credit.biography ?
                        <p className="text-sm flex-1 lg:pt-7"><b>Biography: </b>{credit.biography}</p>
                    :<></>
                    }
                </div>
            }
        </div>
    )
}

export default CreditDetails
