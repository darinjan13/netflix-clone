const moviesCard = ({ movies, setSelectedMovie, addToWatched, setModal }) => {
    // const rendermoviess = () => (
    //     moviess.map((movies, index) => {
    //         return (
    //             <div className="flex flex-col xs:w-[46%] lg:w-52 hover:scale-110 hover:bg-black hover:text-white hover:rounded-md p-1 ">
    //                 <img onClick={addToWatched} src={`${process.env.REACT_APP_IMAGE_URL}${movies.poster_path}`} alt="" />
    //                 <h1>{movies.id}</h1>
    //                 <h1 className="text-center">{movies.media_type === "movies" || movies.media_type === undefined ? movies.title : movies.name}</h1>
    //                 <h1 className="text-center">{movies.media_type === "movies" || movies.media_type === undefined ? movies.release_date : movies.first_air_date}</h1>
    //             </div>)
    //     })
    // )
    const onClickImage = () => {
        setSelectedMovie(movies)
        setModal(true)
    }
    return (
        <>
            <div onClick={onClickImage} className="flex flex-col xs:w-[46%] lg:w-52 hover:bg-red-600 hover:text-black hover:rounded-md p-1 mb-5">
                <img src={`${process.env.REACT_APP_IMAGE_URL}/w500${movies.poster_path}`} alt="" />
                <h1 className="text-center">{movies.media_type === "movie" || movies.media_type === undefined ? movies.title : movies.original_name}</h1>
                <h1 className="text-center">{movies.media_type === "movie" || movies.media_type === undefined ? movies.release_date : movies.first_air_date}</h1>
            </div>
        </>
    );
}

export default moviesCard;