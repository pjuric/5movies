import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from './components/Loading';
import { useParams } from 'react-router-dom'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import LanguageIcon from '@material-ui/icons/Language'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import MovieIcon from '@material-ui/icons/Movie'
import MovieVideos from './components/MovieVideos';
import Cast from './components/Cast';
import SimilarMovies from './components/SimilarMovies';

function MovieDetails() {
    const { id } = useParams()
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [movie, setMovie] = useState([])
    const [keywords, setKeywords] = useState([])
    const [social, setSocial] = useState([])
    const [credits, setCredits] = useState([])
    const [videos, setVideos] = useState([])
    const [providers, setProviders] = useState([])
    const [similar, setSimilar] = useState([])
    const [loading, setLoading] = useState(true)

    const urlMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const urlKeywords = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`
    const urlSocialMedia = `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${API_KEY}`
    const urlCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const urlMoviesVideos = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    const urlProviders = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`
    const urlSimilarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        const getMovieDetails = () => axios.get(urlMovieDetails)
        const getKeyWords = () => axios.get(urlKeywords)
        const getSocialMedia = () => axios.get(urlSocialMedia)
        const getCredits = () => axios.get(urlCredits)
        const getMovieVideos = () => axios.get(urlMoviesVideos)
        const getProviders = () => axios.get(urlProviders)
        const getSimilarMovies = () => axios.get(urlSimilarMovies)
      async function fetchData() {
        const [details, hashtag, media, cast, video, companies, similars] = await axios.all([getMovieDetails(), getKeyWords(), getSocialMedia(),getCredits(), getMovieVideos(), getProviders(), getSimilarMovies() ]);
        setMovie(details.data)
        setKeywords(hashtag.data.keywords)
        setSocial(media.data)
        setCredits(cast.data.cast)
        setVideos(video.data.results)
        setProviders(companies.data.results.US)
        setSimilar(similars.data.results)
        setLoading(false)
        return details;
      }
      fetchData();
    }, [urlMovieDetails, urlKeywords, urlSocialMedia, urlCredits, urlMoviesVideos, urlProviders, urlSimilarMovies])

    // console.log(similar)

    return (
        <div className="h-auto bg-bg-main">
            {loading ? <Loading/> :
            <div className="bg-bg-main">
                <div className="h-screen w-screen bg-bg-main">
                    <div className="absolute top-0 right-0 min-w-full min-h-full object-cover bg-gradient-to-b bg-black-primary opacity-40 z-10 flex place-items-start justify-center">
            
                    </div>
                    <div className="absolute pb-2 top-0 right-0 min-w-full min-h-full space-y-4 object-cover bg-gradient-to-t from-bg-main z-10 flex flex-col justify-end md:pb-16 pl-5 pr-5 items-baseline lg:p-24">
                        <h1 className="text-2xl font-bold sm:text-4xl overflow-hidden">{movie.title} ({movie.release_date.slice(0, 4)}.)</h1>
                        {movie.tagline ? 
                            <h2 className="text-xl font-normal sm:text-2xl overflow-hidden italic">{movie.tagline} </h2>
                        : 
                            <div className="flex space-x-2 w-screen">
                                {keywords.map(keyword => (
                                    <h2 className="text-xl font-normal sm:text-2xl overflow-hidden italic">#{keyword.name} </h2>
                                ))}
                            </div>
                        }
                        <div className="flex flex-row space-x-3">
                            {movie.genres.map(genre => (
                                <a 
                                    key={genre.id} 
                                    href="/"
                                    className="hover:text-white-primary break-normal text-center"
                                >{genre.name}</a>
                            ))}
                        </div>
                        <div className="flex space-x-10">
                            <div className="flex items-center space-x-2">
                                <StarHalfIcon/>
                                <p>{movie.vote_average}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <WatchLaterIcon/>
                                <p>{movie.runtime}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <LanguageIcon/>
                                <p className="uppercase">{movie.original_language}</p>
                            </div>
                        </div>
                        <p className="max-h-64 sm:max-h-full sm:w-96 md:w-1/2">{movie.overview}</p>
                        <div className="space-x-4 flex">
                            <div className="bg-white-primary text-black-full overflow-hidden bg-opacity-50 font-semibold p-2 rounded-md hover:bg-opacity-70 sm:w-36 flex justify-center items-center h-10">
                                <a href="/" className="text-base">Add to List</a>
                            </div>
                            { movie.homepage ? 
                                <div className="bg-black-primary overflow-hidden bg-opacity-50 font-semibold p-2 rounded-md hover:bg-opacity-70 sm:w-36 flex justify-center items-center h-10">
                                    <a href={movie.homepage} target="_blank" rel="noreferrer" className="text-base">Visit Site</a>
                                </div>
                            :
                                <div></div>
                            }
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex space-x-2 md:space-x-4">
                                {social.facebook_id ? 
                                    <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/${social.facebook_id}`}><FacebookIcon/></a>
                                :
                                    <></>
                                }
                                {social.instagram_id ? 
                                    <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/${social.instagram_id}`}><InstagramIcon/></a>
                                :
                                    <></>
                                }
                                {social.twitter_id ? 
                                    <a target="_blank" rel="noreferrer" href={`https://www.twitter.com/${social.twitter_id}`}><TwitterIcon/></a>
                                :
                                    <></>
                                }
                                {social.imdb_id ? 
                                    <a target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${social.imdb_id}/?ref_=vp_vi_tt`}><MovieIcon/></a>
                                :
                                    <></>
                                }
                            </div>
                            <div>
                                <a href="/"><img className="h-8 rounded-full opacity-50 hover:opacity-100" src={providers.flatrate ? `${BASE_URL}${providers.flatrate[0].logo_path}` : `${BASE_URL}${providers.rent[0].logo_path}`} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <img
                        src={
                            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                            `${BASE_URL}${movie.poster_path}`
                        }
                        className="absolute top-0 right-0 min-h-full max-h-full min-w-full object-cover z-0"
                        alt="poster"
                    />
                </div>
                <Cast credits={credits}/>
                {videos.length > 0 ?
                    <MovieVideos videos={videos}/>
                :
                    <></>
                }
                <SimilarMovies similar={similar}/>
            </div>
            }
        </div>
    )
}

export default MovieDetails
