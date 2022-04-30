const { Link } = require("react-router-dom")

const HomeNavbar = () => {
    return (
        <div className="border border-b-gray-300">
            <nav className="flex flex-wrap flex-row justify-center my-3 mx-16 xs:mx-2 sm:mx-16">
                <Link className="mx-2" to="/trending">Trending</Link>
                <Link to="/newrelease">New Release</Link>
            </nav>
        </div>
    );
}
 
export default HomeNavbar;