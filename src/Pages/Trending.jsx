// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userActions } from "../redux/userSlice"
import { authActions } from "../redux/authSlice"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
// import YouTube, { YouTubeProps } from 'react-youtube'

import MovieCard from "../Components/MovieCard"
import Modal from "../Components/Modal";
import HomeNavbar from "../Components/HomeNavbar"

const Trending = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState(null);
    const [modal, setModal] = useState(false);

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [watched, setWatched] = useState([]);

    const fetchMovies = async () => {
        const { data: { results } } = await axios.get(`${process.env.REACT_APP_API_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        setMovies(results)
    }
    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line
    }, [movies]);

    const addToWatched = (movie) => {
        const newWatched = [...watched, movie]
        // console.log(movie)
        setWatched(newWatched)
    }

    // const renderMovies = () => (
    //     movies.map((movie, index) => {
    //         return <MovieCard key={index} movie={movie} arr={arr} setSelectedMovie={setSelectedMovie} setWatched={setWatched} modal={modal} setModal={setModal} />;
    //     })
    // )
    function logout() {
        dispatch(userActions.setEmail(''));
        dispatch(userActions.setPassword(''));
        dispatch(authActions.setLogin(false));
    }
    function asD() {
        console.log(watched)
    }

    return (
        <>
            <HomeNavbar />
            <button onClick={logout} >Logout</button>
            <button onClick={asD} >ASD</button>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            {search}
            <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />
            <div className="box-border p-5">
                <h1>Trending</h1>
                <div className="flex flex-wrap justify-around">
                    {/* <div className="flex flex-row flex-wrap shrink-0 h-full w-full"> */}
                    <MovieCard movies={movies} setSelectedMovie={setSelectedMovie} addToWatched={addToWatched} modal={modal} setModal={setModal} />
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export default Trending;