import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
    return (
        <div className="flex flex-col space-x-1 w-screen h-auto md:flex-row justify-evenly items-center pr-5 pl-5"> 
            <img 
                src="./images/man.svg"
                alt=""
                className="p-5 max-w-2xl sm:p-20 sm:max-w-xl lg:max-w-4xl"
            />
            <div className="h-auto p-3 overflow-hidden md:flex md:p-5 flex-col flex-wrap md:h-full justify-center place-items-start space-y-3 md:w-1/2">
                <h2 className="overflow-hidden text-xl sm:text-2xl lg:text-5xl xl:mr-10">Find out everything about upcoming movies... </h2>
                <p className="">See which movies are currently the most popular and what is currently being watched around the world. Keep up with the latest movie titles and their premieres.</p>
                <div>
                    <Link to="/trending">
                        <button className="bg-white-primary text-black-primary hover:bg-white-secondary w-24 h-9 text-md font-semibold rounded-sm md:w-40 md:h-10 md:text-lg">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Explore
