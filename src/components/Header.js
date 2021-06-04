import StarHalfIcon from '@material-ui/icons/StarHalf'
import { Link } from "react-router-dom";
import PeopleIcon from '@material-ui/icons/People'

function Header ({ movies }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const id = movies[0].id

    return (
        <div className="h-screen">
            <div className="absolute top-0 right-0 min-w-full min-h-full object-cover bg-gradient-to-b bg-black-primary opacity-40 z-10 flex place-items-start pt-40 justify-center">
        
            </div>
            <div className="absolute top-0 right-0 pb-11 min-w-full min-h-full space-y-4 object-cover bg-gradient-to-t from-bg-main z-10 flex flex-col justify-end pl-5 items-baseline lg:p-24 lg:pb-20">
                <h1 className="text-2xl font-bold sm:text-4xl overflow-hidden">NOW FEATURED: <br/><i className="text-white-primary">{movies[0].title}</i></h1>
                <div className="flex space-x-10">
                    <div className="flex space-x-2">
                        <StarHalfIcon/>
                        <p>{movies[0].vote_average}</p>
                    </div>
                    <div className="flex space-x-2">
                        <PeopleIcon/>
                        <p>{movies[0].vote_count}</p>
                    </div>
                </div>
                <p className="line-clamp-5 sm:line-clamp-none max-h-52 sm:max-h-full sm:w-96 md:w-1/2 pr-3">{movies[0].overview}</p>
                <div className="space-x-4">
                        <Link to={`/movie/${id}`}>
                            <button className="bg-black-primary w-20 bg-opacity-50 font-semibold p-2 rounded-md hover:bg-opacity-70 sm:w-36">Details</button>
                        </Link>
                        {/* <Link to={`/login`}> */}
                            <button className="bg-white-primary text-black-full bg-opacity-50 font-semibold p-2 rounded-md hover:bg-opacity-70 sm:w-36">Add to List</button>
                        {/* </Link> */}
                </div>
            </div>
            <img
                src={
                    `${BASE_URL}${movies[0].backdrop_path || movies[0].poster_path}` ||
                    `${BASE_URL}${movies[0].poster_path}`
                }
                className="absolute top-0 right-0 min-h-full max-h-full min-w-full object-cover z-0"
                alt="poster"
            />
        </div>
    );
}

export default Header;
