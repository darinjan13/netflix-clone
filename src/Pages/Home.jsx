// import { useNavigate } from "react-router-dom";
import { userActions } from "../redux/userSlice"
import { authActions } from "../redux/authSlice"
import RedirectHook from "../hooks/RedirectHook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import MovieCard from "../Components/MovieCard"
import { useState } from "react";

const Home = () => {
    RedirectHook('');

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState(null);

    const [movies, setMovies] = useState([]);

    let API_URL = "https://api.themoviedb.org/3/trending/";
    let API_KEY = "5615fc35b6eb4fd0f518a7751cc0d780";

    const fetchMovies = async () => {
        const { data: { results } } = await axios.get(`${API_URL}movie/week?api_key=${API_KEY}`)
        setMovies(results);
        console.log(results)
    }
    
    useEffect(() => {
        fetchMovies()
    }, []);

    // const searchMovies = async (search) => {
    //     const { data: {items} } = await axios.get(`${API_URL}SearchMovie/${API_KEY}/${search}`)

    //     setMovies(items);
    // }

    // useEffect(() => {
    //     searchMovies()
    // },[]);

    const renderMovies = () => (
        movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
        })
    )



    function logout() {
        dispatch(userActions.setEmail(''));
        dispatch(userActions.setPassword(''));
        dispatch(authActions.setLogin(false));
    }
    return (
        <div className="w-full">
            <button onClick={logout} >Logout</button>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            {search}
            <div className="">
                <h1>Trending</h1>
                <div className="flex flex-row overflow-x-scroll h-72">
                    {renderMovies()}
                </div>
                <div className="flex flex-row overflow-x-scroll h-full">
                    {renderMovies()}
                </div>
            </div>
        </div>
    );
}

export default Home;