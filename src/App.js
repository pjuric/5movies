import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from './components/Loading'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MovieDetails from './MovieDetails'
import GenreMovies from './GenreMovies'
import Home from './Home'
import Nav from './components/Nav'
import TrendingMovies from './TrendingMovies'
import CreditDetails from './components/CreditDetails'

function App() {

    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const [movies, setMovies] = useState([])
    const [rated, setRated] = useState([])
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)

    const urlTrending = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    
    useEffect(() => {
      const getTrending = () => axios.get(urlTrending)
      const getTopRated = () => axios.get(urlTopRated)
      const getGenres = () => axios.get(urlGenres)
      async function fetchData() {
        const [request, top, allgenres] = await axios.all([getTrending(), getTopRated(), getGenres()]);
        setMovies(request.data.results)
        setRated(top.data.results)
        setGenres(allgenres.data.genres)
        setLoading(false)
        return request;
      }
      fetchData();
    }, [urlTrending, urlTopRated, urlGenres])

  return (
    <div className="bg-bg-main w-screen">
      {loading ? <Loading/> : 
          <Router>
            <div>
              <Nav/>
              <Switch>
                <Route exact path="/">
                  <Home movies={movies} rated={rated} genres={genres}/>
                </Route>
                <Route exact path="/movie/:id">
                  <MovieDetails/>
                </Route>
                <Route exact path="/genre/:id/:name">
                  <GenreMovies/>
                </Route>
                <Route exact path="/trending">
                  <TrendingMovies movies={movies} title="Trending"/>
                </Route>
                <Route exact path="/toprated">
                  <TrendingMovies movies={rated} title="Top Rated"/>
                </Route>
                <Route exact path="/credits/:id">
                  <CreditDetails/>
                </Route>
              </Switch>
            </div>
          </Router> 
      }
    </div>
  );

}

export default App;