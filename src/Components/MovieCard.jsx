import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MovieCard = ({ movie }) => {
    const image = "https://image.tmdb.org/t/p/w500"

    const [trailers, setTrailers] = useState([])
    const [trailer, setTrailer] = useState(null);

    const fetchTrailers = async () => {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=5615fc35b6eb4fd0f518a7751cc0d780&language=en-US`)
        setTrailers(results)
    }

    useEffect(() => {
        fetchTrailers()
        setTrailer(trailers.find((trailer) => trailer.type === "Trailer"))
    }, [trailers]);
    // const trailer = trailers.find((trailer) => trailer.name === "Final Trailer");
    let hidden = true;
    const kl = () => {
        // axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=5615fc35b6eb4fd0f518a7751cc0d780&language=en-US`)
        // .then(res => {
        //     setTrailers(res.data)
        //     console.log(trailers)
        // })

        hidden = false;
        console.log(trailer)
    }
    return (
        <>
            <div className="text-center flex flex-row flex-wrap shrink-0 h-full scroll-smooth">
                <div className="flex flex-col h-full scroll-smooth">
                    <img onClick={kl} className="h-full w-full" src={`${image}${movie.poster_path}`} alt="" />
                    {/* {movie.title} */}
                </div>
            </div>
        </>
    );
}

export default MovieCard;