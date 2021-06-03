import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const three = "grid mt-5 sm:pr-8 grid-cols-2 lg:grid-cols-3 gap-3 px-3"
    const two = "grid mt-5 sm:pr-8 grid-cols-2 gap-3 px-3"
    const [result, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState();
    const [length, setLength] = useState(2)
  
    useEffect(() =>{
      getResults();
    }, [query]);
  
    const getResults = async () => {
      const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
      setResults(movies.data.results);
      setLength(movies.data.results.length)
    };
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

    return (
        <div className="pt-20 sm:mt-10 xl:pt-28 min-h-screen">
            <div className="flex items-center">
                <div className="w-screen flex flex-col items-center justify-center lg:pl-20">
                    <h2 className="overflow-hidden text-xl sm:text-3xl h-12 lg:text-4xl xl:text-5xl xl:h-20">Search specific movies by title</h2>
                    <form onSubmit={getSearch} className="space-x-5">
                        <input 
                            type="text" 
                            value={search}
                            onChange={updateSearch}
                            placeholder="Movie Title"
                            className="p-2 rounded text-black-primary text-center lg:w-96"
                        />
                        <button type="submit" className="bg-black-primary mt-5 w-20 bg-opacity-50 font-semibold p-2 rounded-md hover:bg-opacity-70 sm:w-36">Search</button>
                    </form>
                </div>
                <img
                    alt=""
                    src="./images/search.svg"
                    className="hidden lg:block w-2/3"
                />
            </div>
            {result.length > 0 && result[0].title !== "UNdefined" ?
                <div className={length > 2 ? `${three}` : `${two}`}>
                    {result.map(response => (
                        <div key={response.id} className="">
                            <Link to={`/movie/${response.id}`}>
                                <div className="">
                                    <img 
                                        src={
                                            `${BASE_URL}${response.backdrop_path || response.poster_path}` ||
                                            `${BASE_URL}${response.poster_path}`}
                                        alt=""
                                        className="transform rounded-md sm:hover:scale-95 object-cover min-h-full"
                                    />
                                    <h2 className="h-14 text-sm text-center lg:h-16 xl:h-24 pt-2 overflow-hidden sm:text-base lg:text-lg">{response.title}</h2> 
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                :
                <div>
                    
                </div>
            }
        </div>
    )
}

export default Search
