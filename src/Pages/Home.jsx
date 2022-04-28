// import { useNavigate } from "react-router-dom";
import { userActions } from "../redux/userSlice"
import { authActions } from "../redux/authSlice"
import RedirectHook from "../hooks/RedirectHook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import MovieCard from "../Components/MovieCard"
import { useState } from "react";
import Modal from "../Components/Modal";

const Home = () => {
    RedirectHook('');

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState(null);
    const [modal, setModal] = useState(false);

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [watched, setWatched] = useState([]);

    let API_URL = "https://api.themoviedb.org/3/trending/";

    const fetchMovies = async () => {
        const { data: { results } } = await axios.get(`${API_URL}all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        setMovies(results);
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    const renderMovies = () => (
        movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} setWatched={setWatched} modal={modal} setModal={setModal} />;
        })
    )

    function logout() {
        dispatch(userActions.setEmail(''));
        dispatch(userActions.setPassword(''));
        dispatch(authActions.setLogin(false));
    }
    function asD() {
        setModal(true)
        console.log(modal)
    }
    return (
        <>
            <button onClick={logout} >Logout</button>
            <button onClick={asD} >ASD</button>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            {search}
            <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />
            <div className="box-border p-5">
                <h1>Trending</h1>
                <div className="flex flex-wrap justify-around">
                    {/* <div className="flex flex-row flex-wrap shrink-0 h-full w-full"> */}
                        {renderMovies()}
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export default Home;