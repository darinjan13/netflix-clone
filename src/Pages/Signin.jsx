import Logo from '../Assets/logo.svg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../redux/authSlice';
import RedirectHook from '../hooks/RedirectHook';

const Signin = () => {
    RedirectHook('signin');

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const [error, setError] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if (email === signInEmail && password === signInPassword) {
            dispatch(authActions.setLogin(true));
            navigate("/trending");
        } else {
            setError(true);
        }
    }
    return (
        <div className="h-screen bg-bgImage bg-cover">
            <div className="h-full bg-gray-900/50">
                <nav className="flex flex-wrap xs:bg-black md:bg-transparent">
                    <a href="/">
                    <img className="h-10 xs:h-5 sm:h-10 my-6 mx-16 xs:mx-5 sm:mx-16" src={Logo} alt="Netflix" />
                    </a>
                </nav>
                <div className="xs:h-full md:h-max xs:w-full md:w-[450px] bg-black xs:p-3 md:p-20 md:mx-auto">
                    <form onSubmit={onSubmit} className="flex flex-col">
                        <h1 className="text-white text-4xl font-bold mb-5">Sign In</h1>
                        <div className={`${error ? 'block' : 'hidden'} text-white text-sm bg-[#e87c03] rounded-lg py-2 px-3 mb-4`} role="alert">
                            Sorry, we can't find an account with this email address. Please try again or <a className="underline" href="/signup/regform">create a new account</a>.
                        </div>
                        <input className="text-white rounded-lg bg-[#333] mb-5" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} type="email" placeholder="Email" required />
                        <input className="text-white rounded-lg bg-[#333] border-0 mb-10" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} type="password" placeholder="Password" required />
                        <button className="text-white text-center font-bold bg-red-600 rounded-lg p-4">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signin