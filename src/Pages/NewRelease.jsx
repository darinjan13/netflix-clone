import { useEffect, useState } from "react";
import axios from "axios";

import HomeNavbar from "../Components/HomeNavbar"
import MovieCard from "../Components/MovieCard";
import Modal from "../Components/Modal";

const NewRelease = () => {
    const date = new Date()
    const [dateToday] = date.toISOString().split('T')
    let arr = []
    let url = `${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=5615fc35b6eb4fd0f518a7751cc0d780&language=en-US&page=`

    const [newReleases, setNeWReleases] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [modal, setModal] = useState(false);

    const fetchNewRelease = async () => {
        for (let page = 1; page < 67; page++) {
            const { data: { results } } = await axios.get(`${url}${page}`)
            results.map((result) => {
                if (result.release_date === dateToday && result.backdrop_path != null && result.poster_path != null && arr.length < 30) {
                    arr.push(result)
                }
            })
            if (arr.length === 30) {
                var s = arr.reduce((filter, current) => {
                    var dk = filter.find(item => item.title === current.title);
                    if (!dk) {
                        return filter.concat([current])
                    } else {
                        return filter
                    }
                }, [])
                console.log(s)
                setNeWReleases(s)
                break;
            }
        }
    }
    useEffect(() => {
        fetchNewRelease()
        // eslint-disable-next-line
    }, []);



    return (
        <>
        <HomeNavbar />
            {/* <button onClick={logout} >Logout</button> */}
            {/* <button onClick={asD} >ASD</button> */}
            {/* <input type="text" onChange={e => setSearch(e.target.value)} /> */}
            {/* {search} */}
            <Modal selectedMovie={selectedMovie} modal={modal} setModal={setModal} />
            <div className="box-border p-5">
                <h1>Trending</h1>
                <div className="flex flex-wrap justify-around">
                <MovieCard movies={newReleases} />
                </div>
            </div>
        </>
    );
}

export default NewRelease;