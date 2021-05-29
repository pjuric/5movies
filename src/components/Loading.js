import LinearProgress from '@material-ui/core/LinearProgress';

function Loading() {
    return (
        <div className="bg-bg-main flex justify-center items-center">
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
    )
}

export default Loading