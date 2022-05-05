import { useState, useEffect } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";

import Modal from "../Components/Modal";
import HomeNavbar from "../Components/HomeNavbar";
import MovieCard from "../Components/MovieCard"
import Footer from "../Components/Footer";

const ContinueWatching = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    const [continueWatching, setContinueWatching] = useState(null);
    // eslint-disable-next-line
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modal, setModal] = useState(true);
    const [loading, setLoading] = useState(false);
    const [empty, setEmpty] = useState(false);

    useEffect(
        () => onSnapshot(doc(db, "continueWatching", user.uid), (doc) => {
            const results = doc.data().results
            if (results.length !== 0) {
                setContinueWatching(results.reverse())
                setLoading(true)
            } else {
                setLoading(true)
                setEmpty(true)
            }
        })
        // eslint-disable-next-line
        , [])

    const renderMovies = () => (
        continueWatching.map((movie, index) => {
            return <MovieCard movies={movie} key={index} setSelectedMovie={setSelectedMovie} setModal={setModal} />
        })
    )

    const renderLoading = () => (
        <div className="flex h-screen items-center justify-center">
            <div className="animate-spin w-40 h-40 border-8 border-sky-500 border-r-white rounded-full">
            </div>
        </div>
    )

    const renderEmpty = () => (
        <div className="flex h-screen items-center justify-center uppercase">
            You didn't watch movies or tv series for now, go watch now.
        </div>
    )
    return (
        <div className="bg-gray-900/80 text-white">
            <HomeNavbar />
            {continueWatching && loading ?
                <>
                    {selectedMovie && <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />}
                    <div className="box-border p-5">
                        <h1>Continue Watching</h1>
                        <div className="flex flex-wrap justify-around">
                            {renderMovies()}
                        </div>
                    </div>
                    <Footer />
                </> : renderLoading()
                    &&
                    empty && loading ?
                    <>
                        {selectedMovie && <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />}
                        <div className="box-border p-5">
                            <h1>Continue Watching</h1>
                            <div className="flex flex-wrap justify-around">
                                {renderEmpty()}
                            </div>
                        </div>
                        <Footer />
                    </> : renderLoading()}

        </div>
    );
}
export default ContinueWatching;

//{continueWatching && loading ? renderMovies() : renderLoading() && empty && loading ? renderEmpty() : renderLoading()}