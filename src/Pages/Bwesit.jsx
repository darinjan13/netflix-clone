// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userActions } from "../redux/userSlice"
import { authActions } from "../redux/authSlice"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import MovieCard from "../Components/MovieCard"
import Modal from "../Components/Modal";
import HomeNavbar from "../Components/HomeNavbar"

const Bwesit = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState(null);
    const [modal, setModal] = useState(false);

    const date = new Date()
    const [dateToday] = date.toISOString().split('T')
    let arr = []
    let url = `${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=5615fc35b6eb4fd0f518a7751cc0d780&language=en-US&page=`

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});

    const fetchMovies = async () => {
        for (let page = 1; page < 67; page++) {
            const { data: { results } } = await axios.get(`${url}${page}`)
            results.map((result) => {
                if (result.release_date === dateToday && result.backdrop_path != null && result.poster_path != null && arr.length < 15) {
                    arr.push(result)
                }
            })
            if (arr.length === 15) {
                setMovies(arr)
                break;
            }
        }
    }

    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line
    }, []);

    const renderMovies = () => (
        movies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} setSelectedMovie={setSelectedMovie} modal={modal} setModal={setModal} />;
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
                        {renderMovies()}
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export default Bwesit;