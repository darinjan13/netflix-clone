// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import YouTube, { YouTubeProps } from 'react-youtube'

import { doc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../firebase/firebase.config";
import { fetchTrending, getTrending, getLoading } from "../redux/trendingSlice"

import MovieCard from "../Components/MovieCard"
import Modal from "../Components/Modal";
import HomeNavbar from "../Components/HomeNavbar"
import Footer from "../Components/Footer";

const Trending = () => {
    const dispatch = useDispatch();
    const trending = useSelector(getTrending);
    const loading = useSelector(getLoading)
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [modal, setModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        document.title = "Trending"
    }, [])

    useEffect(() => {
        dispatch(fetchTrending())
    }, [dispatch]);

    useEffect(() => {
        if (Object.keys(selectedMovie).length !== 0) {
            addToWatched();
        }
        // eslint-disable-next-line
    }, [selectedMovie])
    const renderMovies = () => (
        trending.map((movie, index) => {
            return <MovieCard movies={movie} key={index} setSelectedMovie={setSelectedMovie} setModal={setModal} />
        })
    )
    const addToWatched = async () => {
        const continueWatching = doc(db, "continueWatching", currentUser.uid)
        await updateDoc(continueWatching, {
            results: arrayUnion(selectedMovie)
        })
    }

    return (
        <div className="bg-gray-900/80 text-white">
            <HomeNavbar />
            {loading === "Pending" && (
                <div className="flex h-screen items-center justify-center">
                    <div className="animate-spin w-40 h-40 border-8 border-sky-500 border-r-white rounded-full">
                    </div>
                </div>
            )}

            {loading === "Fulfilled" && (
                <>
                    {selectedMovie && <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />}
                    <div className="box-border p-5">
                        <h1 className="text-4xl">Trending Now</h1>
                        <div className="flex flex-wrap justify-around">
                            {renderMovies()}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default Trending;