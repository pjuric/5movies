import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';

function Loading() {
    return (
        <div className="blur-lg">
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
    )
}

export default Loading
