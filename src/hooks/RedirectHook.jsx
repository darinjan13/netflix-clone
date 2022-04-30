import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectHook = (location) => {
    const navigate = useNavigate();
    const status = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        status ? navigate("/trending") : navigate(`/${location}`);
        // eslint-disable-next-line
    }, [status])
}

export default RedirectHook;