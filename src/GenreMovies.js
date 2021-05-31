import React from 'react'
import { useParams } from 'react-router'

function GenreMovies() {
    const { id } = useParams()
    const API_KEY = "3f3460fb8427b4da507a64e4c80f3a16"

    return (
        <div className="bg-bg-main h-96">
            {id}
        </div>
    )
}

export default GenreMovies
