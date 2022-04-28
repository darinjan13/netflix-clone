const Modal = ({ selectedMovie, modal, setModal }) => {
    const image = "https://image.tmdb.org/t/p/original"
    const asd = () =>  {
        setModal(false)
    }
    return (
        <>
            <div className={`fixed${modal ? '' : ' hidden'} z-50 inset-0 overflow-y-auto h-screen w-full bg-cover bg-center`} style={{ backgroundImage: `url(${image}${selectedMovie.backdrop_path})` }}>
                <div className="h-full w-full">
                    <h1>{selectedMovie.title}</h1>
                    <button onClick={asd}>Close</button>
                </div>
            </div>
            {/* <div className="static">
            <img className="h-72 mx-auto" src={`${image}${selectedMovie.backdrop_path}`} alt=""/>
            </div> */}
        </>
    );
}

export default Modal;