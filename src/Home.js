import React from 'react'
import Explore from './components/Explore'
import Featured from './components/Featured'
import Genres from './components/Genres'
import Header from './components/Header'

function Home({movies, rated, genres}) {
    return (
        <div>
            <Header movies={movies}/>
            <Explore/>
            <Featured  movies={movies} rated={rated}/>
            <Genres genres={genres}/>
        </div>
    )
}

export default Home
