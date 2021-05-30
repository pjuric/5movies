import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MovieDetails from './MovieDetails';
import Home from './Home';

function App() {

    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [movies, setMovies] = useState([])
    const [rated, setRated] = useState([])
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)
    const getTrending = () => axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    const getTopRated = () => axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    const getGenres = () => axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  
    useEffect(() => {
      async function fetchData() {
        const [request, top, allgenres] = await axios.all([getTrending(), getTopRated(), getGenres()]);
        setMovies(request.data.results)
        setRated(top.data.results)
        setGenres(allgenres.data.genres)
        setLoading(false)
        return request;
      }
      fetchData();
    }, [url])

  return (
    <div className="bg-bg-main w-screen">
      {loading ? <Loading/> : 
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home movies={movies} rated={rated} genres={genres}/>
                </Route>
                <Route exact path="/movie/:id">
                  <MovieDetails/>
                </Route>
              </Switch>
            </div>
          </Router> 
      }
    </div>
  );

}

export default App;