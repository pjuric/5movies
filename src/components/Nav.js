import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Nav() {

    const [burgerStatus, setBurgerStatus] = useState(false)
    const show = "fixed rounded-md top-0 right-0 bg-white-primary w-2/3 z-50 list-none p-5 flex flex-col text-center transition"
    const hide = "hidden"

    return (
        <header className="absolute top-0 flex justify-between p-5 items-center z-50 w-full">
            <a href="/"><img className="w-10 md:w-14 z-50" src="./images/logo.svg" alt="logo"/></a>
            <div className="hidden md:flex flex-grow justify-evenly max-w-2xl text-white-secondary">
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">Home</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/search">Search</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">Credits</a>
                <a className="hover:text-white-primary z-50 text-xs md:text-base" href="/">About</a>
            </div>
            <button onClick={() => setBurgerStatus(true)} className="cursor-pointer md:hidden"><MenuIcon fontSize="large"/></button>
            <div className={burgerStatus ? show : hide}>
                <div className="flex justify-end text-black-primary">
                    <CloseIcon color="primary" fontSize="large" onClick={() => setBurgerStatus(false)}/>
                </div>
                <li className="py-5 border-b-2"><a className="font-semibold text-black-primary" href="/">Home</a></li>
                <li className="py-5 border-b-2"><a className="font-semibold text-black-primary" href="/search">Search</a></li>
                <li className="py-5 border-b-2"><a className="font-semibold text-black-primary" href="/">Credits</a></li>
                <li className="py-5 border-b-2"><a className="font-semibold text-black-primary" href="/">About</a></li>
            </div>
        </header>
    )
}

export default Nav;
