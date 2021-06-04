import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import { useDispatch } from 'react-redux'
import { newRequestToken } from './features/requestSlice'
import { useSelector } from 'react-redux'
import { selectRequestToken } from './features/requestSlice'

function Auth() {

    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const dispatch = useDispatch()
    const requestToken = useSelector(selectRequestToken)
    const [loading, setLoading] = useState(true)

    const urlRequestToken = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`


    const getRequestToken = () => axios.get(urlRequestToken)
    async function fetchData() {
        const request = await getRequestToken();
        dispatch(newRequestToken({
            requestToken: request.data.request_token
        }))
        setLoading(false)
        return request;
    }

    return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center">
            <button onClick={fetchData}>Login</button>
            {loading ? <Loading/> : 
                <div>
                    <h1>Successfull</h1>
                    <a href={`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/welcome`}>Confrim</a>
                    {console.log(requestToken)}
                </div>
            }
        </div>
    )
}

export default Auth
