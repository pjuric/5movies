import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from './components/Loading';
import { Link, useParams, useLocation } from 'react-router-dom'
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
import Collection from './components/Collection';

function MovieDetails() {
    const { id } = useParams()
    const { path } = useLocation();
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
        window.scrollTo(0, 0);
        return details;
      }
      fetchData();
    }, [path, urlMovieDetails, urlKeywords, urlSocialMedia, urlCredits, urlMoviesVideos, urlProviders, urlSimilarMovies])

    return (
        <div className="h-auto bg-bg-main">
            {loading ? <Loading/> :
            <div className="bg-bg-main">
                <div className="sm:h-screen w-screen bg-bg-main border-b-2 sm:border-none">
                    <div className="absolute top-0 right-0 min-w-full min-h-full object-cover bg-gradient-to-b bg-black-primary opacity-20 sm:opacity-40 z-10 flex place-items-start justify-center">
            
                    </div>
                    <img
                        src={
                            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                            `${BASE_URL}${movie.poster_path}`
                        }
                        className="relative shadow-lg sm:shadow-none sm:absolute top-0 right-0 sm:min-h-full sm:max-h-full sm:min-w-full object-cover z-0"
                        alt="poster"
                    />
                    <div className="relative sm:absolute sm:max-w-screen-sm pb-2 pt-4 top-0 right-0 min-w-full sm:min-h-full space-y-4 object-cover bg-gradient-to-t from-bg-main z-10 flex flex-col justify-end md:pb-8 pl-5 pr-5 items-baseline lg:p-24 lg:pb-10">
                        <h1 className="text-2xl font-bold sm:text-2xl lg:text-4xl sm:h-14 overflow-hidden">{movie.title} ({movie.release_date.slice(0, 4)}.)</h1>
                        {movie.tagline ? 
                            <h2 className="text-xl font-normal sm:text-2xl overflow-hidden italic">{movie.tagline} </h2>
                        : 
                            <div className="flex  space-x-2 w-screen">
                                {keywords.slice(0, 4).map(keyword => (
                                    <h2 key={keyword.id} className="text-xs font-normal sm:text-lg overflow-hidden italic">#{keyword.name} </h2>
                                ))}
                            </div>
                        }
                        <div className="flex flex-row space-x-3">
                            {movie.genres.slice(0, 4).map(genre => (
                                <div key={genre.id}>
                                    <Link to={`/genre/${genre.id}/${genre.name}`}>
                                        <button  
                                            className="hover:text-white-primary break-normal text-center"
                                        >{genre.name}</button>
                                    </Link>
                                </div>  
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
                        <p className="sm:w-96 md:w-1/2">{movie.overview}</p>
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
                        <div className="w-full flex justify-between items-start pb-5">
                            <div className="flex items-center justify-center space-x-2 md:space-x-4">
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
                            {providers &&
                                <div className="flex flex-col items-center justify-center">
                                    <Link to={`/provider/${providers.buy ? `${providers.buy[0].provider_name}` : (providers.rent ? `${providers.rent[0].provider_name}` : `${providers.flatrate[0].provider_name}`)}`}>
                                        <button><img className="h-8 rounded-full opacity-50 hover:opacity-100" src={providers.buy ? `${BASE_URL}${providers.buy[0].logo_path}` : (providers.rent ? `${BASE_URL}${providers.rent[0].logo_path}` : `${BASE_URL}${providers.flatrate[0].logo_path}`)} alt=""/></button>
                                    </Link>
                                    <p className="text-xs">Data source: <i><b>JustWatch</b></i></p>
                                </div>
                            } 
                        </div>
                    </div>
                </div>
                <div className="space-y-20 pt-5">
                    <Cast credits={credits}/>
                    {videos.length >= 3 ?
                        <MovieVideos videos={videos}/>
                    :
                        <></>
                    }
                    {movie.belongs_to_collection &&
                        <Collection collection={movie.belongs_to_collection}/>
                    }
                    {similar.length > 0 ? 
                        <SimilarMovies similar={similar}/>
                        
                    : <></>
                    } 
                </div>
            </div>
            }
        </div>
    )
}

export default MovieDetails
