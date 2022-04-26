import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectHook = () => {
    const navigate = useNavigate();
    const status = useSelector((state) => state.auth.isLoggedIn);

    return (
        useEffect(() => {
            status ? navigate("/home") : navigate("/");
        },[status])
    );
}
 
export default RedirectHook;