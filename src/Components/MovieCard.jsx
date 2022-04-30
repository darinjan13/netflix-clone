import { useEffect } from "react"

const MovieCard = ({ movies, setSelectedMovie, addToWatched, setModal }) => {
    // const onClickImage = (movie) => {
    //     // setSelectedMovie(movie)
    //     // setModal(true)
    //     // setWatched(movie)
    //     // arr.push(movie)
    //     // console.log(arr)
    //     console.log(movie)
    // }
    // const renderMovies = () => (
    //     movies.map((movie, index) => {
    //         return (
    //             <div className="flex flex-col xs:w-[46%] lg:w-52 hover:scale-110 hover:bg-black hover:text-white hover:rounded-md p-1 ">
    //                 <img onClick={addToWatched} src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} alt="" />
    //                 <h1>{movie.id}</h1>
    //                 <h1 className="text-center">{movie.media_type === "movie" || movie.media_type === undefined ? movie.title : movie.name}</h1>
    //                 <h1 className="text-center">{movie.media_type === "movie" || movie.media_type === undefined ? movie.release_date : movie.first_air_date}</h1>
    //             </div>)
    //     })
    // )

    return (
        <>
            {movies.map((movie, index) => (
                <div onClick={() => addToWatched(movie)} key={index} className="flex flex-col xs:w-[46%] lg:w-52 hover:scale-110 hover:bg-black hover:text-white hover:rounded-md p-1 ">
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} alt="" />
                    <h1>{movie.id}</h1>
                    <h1 className="text-center">{movie.media_type === "movie" || movie.media_type === undefined ? movie.title : movie.name}</h1>
                    <h1 className="text-center">{movie.media_type === "movie" || movie.media_type === undefined ? movie.release_date : movie.first_air_date}</h1>
                </div>
            ))}
        </>
    );
}

export default MovieCard;