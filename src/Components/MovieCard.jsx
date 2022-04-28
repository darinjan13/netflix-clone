import { useEffect } from "react"

const MovieCard = ({ movie, setSelectedMovie, setWatched, setModal }) => {
    const image = "https://image.tmdb.org/t/p/w500"

    const onClickImage = () => {
        setSelectedMovie(movie)
        setModal(true)
    }
    return (
        <>
            <div className="flex flex-col xs:w-[46%] lg:w-52 hover:scale-110 hover:bg-black hover:text-white hover:rounded-md p-1 ">
                <img onClick={onClickImage} src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} alt="" />
                <h1 className="text-center">{movie.media_type === "movie" ? movie.title : movie.name}</h1>
                
            </div>
        </>
    );
}

export default MovieCard;