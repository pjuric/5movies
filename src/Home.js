import React from 'react'
import Explore from './components/Explore'
import Featured from './components/Featured'
import Genres from './components/Genres'
import Header from './components/Header'
import Upcoming from './components/Upcoming'

function Home({movies, rated, genres, upcoming}) {
    return (
        <div className="pr-3">
            <Header movies={movies}/>
            <Explore/>
            <Featured  movies={movies} rated={rated}/>
            <Genres genres={genres}/>
            <Upcoming movies={upcoming}/>
        </div>
    )
}

export default Home
