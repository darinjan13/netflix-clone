import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import Logo from '../Assets/logo.svg'

const HomeNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const logout = async () => {
        setButtonLoading(true)
        setButtonDisable(true)

        try {
            await signOut(auth)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        // <div className="border border-b-gray-300">
        //     <nav className="flex flex-wrap flex-row justify-center my-3 mx-16 xs:mx-1 sm:mx-16">
        //         <Link className="xs:mx-1 md:mx-2" to="/trending">Trending</Link>
        //         <Link to="/newrelease">New Release</Link>
        //         <Link className="xs:mx-1 md:mx-2" to="/continuewatching">Continue Watching</Link>
        //         <button onClick={logout} >
        //             {buttonLoading ? <div className="animate-spin w-5 h-5 border-2 border-sky-500 border-r-white rounded-full"></div> : "Logout"}
        //         </button>
        //     </nav>
        // </div>
        <div className="sticky top-0 bg-black">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonLoading={buttonLoading} logout={logout} splitLocation={splitLocation} />
            {menuOpen &&
                <MobileMenu>
                    <Link className=" text-white font-semibold hover:text-gray-600" to="/trending">Trending</Link>
                    <Link className=" text-white font-semibold hover:text-gray-600" to="/newrelease">New Release</Link>
                    <Link className=" text-white font-semibold hover:text-gray-600" to="/continuewatching">Continue Watching</Link>
                    <button onClick={logout} className="bg-red-900 rounded-full p-3" disabled={buttonDisable} >
                        {buttonLoading ? <div className="animate-spin w-5 h-5 border-2 border-sky-500 border-r-white rounded-full mx-auto "></div> : <div className='text-white'>Logout</div>}
                    </button>
                </MobileMenu>}
        </div>
    );
}

const Navbar = ({ menuOpen, setMenuOpen, buttonLoading, logout, buttonDisable, splitLocation }) => (
    <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
            <img className="xs:h-5 sm:h-10 " src={Logo} alt="Netflix" />
        </div>
        <nav className="hidden md:block space-x-6">
            <Link className={`${splitLocation[1] === "trending" ? "bg-red-600" : ""} rounded-md text-white font-semibold hover:bg-red-600 p-2`} to="/trending">Trending</Link>
            <Link className={`${splitLocation[1] === "newrelease" ? "bg-red-600" : ""} rounded-md text-white font-semibold hover:bg-red-600 p-2`} to="/newrelease">New Release</Link>
            <Link className={`${splitLocation[1] === "continuewatching" ? "bg-red-600" : ""} rounded-md text-white font-semibold hover:bg-red-600 p-2`} to="/continuewatching">Continue Watching</Link>
            <button onClick={logout} className=" rounded-md hover:bg-red-600 px-5 py-2" disabled={buttonDisable} >
                {buttonLoading ? <div className="animate-spin p-2 border-2 border-sky-500 border-r-white rounded-full"></div> : <div className='text-white'>Logout</div>}
            </button>
        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="border border-white rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </div>
);

const MobileMenu = ({ children }) => (
    <nav className="p-4 flex flex-col space-y-3 md:hidden">
        {children}
    </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`text-white transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);

export default HomeNavbar;