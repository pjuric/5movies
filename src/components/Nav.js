import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'

function Nav() {


    return (
        <header className="absolute top-0 flex justify-between p-5 items-center z-50 w-full">
            <a href="/"><img className="w-10 md:w-14 z-50" src="./images/logo.svg" alt="logo"/></a>
            <div className="flex flex-grow justify-evenly max-w-2xl text-white-secondary">
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">Home</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/search">Search</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">Credits</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">About</a>
            </div>
            <div className="w-10 hidden overflow-hidden h-10 md:w-14 md:h-14 md:hidden z-10">
                <button className=""><MenuIcon fontSize="large"/></button>
            </div>
        </header>
    )
}

export default Nav;
