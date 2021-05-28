import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Explore from './components/Explore'
import Header from './components/Header'
import Featured from './components/Featured';
import Loading from './components/Loading';

function App() {

  const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(url);
        setMovies(request.data.results)
        setLoading(false)
        return request;
      }
      fetchData();
    }, [url])

  return (
    <div className="bg-bg-main w-screen">
      {loading ? <Loading/> : 
        <div>
          <Header movies={movies}/>
          <Explore/>
          <Featured  movies={movies}/>
        </div>  
      }
    </div>
  );
}

export default App;
