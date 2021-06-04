import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from './components/Loading'
import Home from './Home'

function Welcome() {

    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"
    const { token } = useParams()
    const[session, setSession] = useState()
    const[account, setAccount] = useState()
    const[loading, setLoading] = useState()
    const urlSession = `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`
    const urlAccount = `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${session}`

    useEffect(() => {
        const getSession = () => axios.post(urlSession, {
            "request_token": `${token}`
          })
        
        async function fetchData() {
          const sessionId = await getSession()
          localStorage.setItem('sessionId', sessionId.data.session_id);
          setSession(sessionId.data.session_id)
          setLoading(false)
          return sessionId;
        }
        fetchData();
      }, [urlSession])

    //   const getAccount = () => axios.get(urlAccount)  
    //         const user = await getAccount()  
    //         setAccount(user)

    return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center">
            {loading ? <Loading/> :
                <div>
                    <h1>Welcome</h1>
                    {console.log(session)}
                </div>
            }
        </div>
    )
}

export default Welcome
