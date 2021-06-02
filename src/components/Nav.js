import React from 'react'

function Nav() {
    return (
        <header className="absolute top-0 flex justify-between sm:flex-row p-5 md:justify-between items-center z-50 w-full">
            <img className="w-10 md:w-14 z-50" src="./images/logo.svg" alt="logo"/>
            <div className="hidden md:flex flex-grow justify-evenly max-w-2xl text-white-secondary">
                <a className="hover:text-white-primary z-50 font-medium" href="/">Home</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/">Search</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/">Credits</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/">About</a>
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 md:hidden bg-white-primary z-50">
                
            </div>
        </header>
    )
}

export default Nav;
