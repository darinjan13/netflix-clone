const Modal = ({ selectedMovie, modal, setModal }) => {
    const image = "https://image.tmdb.org/t/p/original"
    const asd = () => {
        setModal(false)
    }
    // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }
    // const opts: YouTubeProps['opts'] = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };
    return (
        <>
            <div className={`fixed${modal ? '' : ' hidden'} w-screen h-screen s`}>
                <div className="mx-auto z-50 inset-0 h-[60%] w-[60%] bg-cover bg-center" style={{ backgroundImage: `url(${image}${selectedMovie.backdrop_path})` }}>
                    <div className="h-full w-full">
                        <h1>{selectedMovie.title}</h1>
                        <button onClick={asd}>Close</button>
                    </div>
                </div>
            </div>

            {/* <div className="static">
            <img className="h-72 mx-auto" src={`${image}${selectedMovie.backdrop_path}`} alt=""/>
            </div> */}
        </>
    );
}

export default Modal;