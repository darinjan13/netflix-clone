import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const RedirectHook = (location) => {
    const navigate = useNavigate();
    const status = useSelector((state) => state.auth.isLoggedIn);
    const asdf = () => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                navigate("/trending")
            } else {
                navigate(`/${location}`);
            }
        })
    }
    useEffect(() => {
        asdf()
        // eslint-disable-next-line
    }, [asdf])
}

export default RedirectHook;