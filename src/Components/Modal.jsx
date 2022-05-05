import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

const Modal = ({ selectedMovie, modal, setModal }) => {

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <Transition show={modal} as={Fragment}>
                <Dialog onClose={closeModal} className="relative z-50 ">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >

                        <div className="fixed inset-0 flex items-center justify-center">
                            <Dialog.Panel className=" h-[60%] w-[90%] rounded bg-white">

                                <div className="relative h-full w-full bg-cover bg-center flex items-end " style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}/original${selectedMovie.backdrop_path})` }}>
                                    <button className="absolute right-0 top-0 text-white" onClick={closeModal}>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className="bg-gray-900/70 text-white mx-auto p-5 pb-10">
                                        <h1 className="font-bold text-xl text-center mb-10">{selectedMovie.media_type === "movie" || selectedMovie.media_type === undefined ? selectedMovie.title : selectedMovie.original_name}</h1>
                                        {selectedMovie.overview}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>

                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}

export default Modal;