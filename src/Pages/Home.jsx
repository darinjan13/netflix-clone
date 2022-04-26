import RedirectHook from "../hooks/RedirectHook";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const status = useSelector((state) => state.auth.isLoggedIn);
    useEffect(() => {
        if (status) {
            console.log("a")
        } else {
            console.log("b")
        }
    }, [])
    return (
        <>
        </>
    );
}

export default Home;