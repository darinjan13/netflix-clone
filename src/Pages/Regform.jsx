import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/userSlice'
import RedirectHook from '../hooks/RedirectHook';

const Regform = () => {
    //Redirect
    // RedirectHook();

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const tempEmail = useSelector((state) => state.user.tempEmail);

    function onSubmit(e) {
        e.preventDefault();
        if (signUpEmail === '') {
            dispatch(actions.setEmail(tempEmail));
            dispatch(actions.setPassword(signUpPassword));
            console.log("asd")
            navigate("/signin")
        } else {
            dispatch(actions.setEmail(signUpEmail));
            dispatch(actions.setPassword(signUpPassword));
            console.log("s")
            navigate("/signin")
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col xs:w-auto sm:w-[32%] my-5 xs:mx-6 sm:mx-auto">
                <p className="text-xs mt-10">STEP <b>1</b> OF <b>3</b></p>
                <h1 className="text-4xl font-medium">Create a password to start your membership</h1>
                <h3 className="xs:text-md sm:text-xl mt-4">Just a few more steps and you're done!</h3>
                <h3 className="xs:text-md sm:text-xl mt-2">We hate paperwork, too.</h3>
                <form onSubmit={onSubmit} className="flex flex-col">
                    <input required type="email" defaultValue={tempEmail} onChange={(e) => setSignUpEmail(e.target.value)} placeholder="Email" className="form-input mt-2 py-4" />
                    <input required type="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} placeholder="Add a password" className="form-input mt-2 py-4" />
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox p-3" />
                        <span className="xs:text-md sm:text-xl mt-2 ml-2">Please do not email me Netflix special offers.</span>
                    </label>
                    <button className="bg-[#e50914] rounded-md text-white text-2xl mt-5 p-4">Register</button>
                </form>
            </div>
        </>
    );
}

export default Regform;