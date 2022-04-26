import React from 'react';
import { useNavigate } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Devices from '../Assets/Devices.png'
import RedirectHook from '../hooks/RedirectHook';

const Signup = () => {
    // RedirectHook();
    let navigate = useNavigate();
    return ( 
        <>
            <Navbar />
                <div className="flex flex-col xs:text-left sm:text-center xs:w-auto sm:w-3/12 my-36 xs:mx-6 sm:mx-auto">
                    <img src={Devices} alt="" className="w-9/12 xs:mx-0 sm:mx-auto"/>
                    <p className="text-xs mt-10">STEP <b>1</b> OF <b>3</b></p>
                    <h1 className="text-3xl font-medium">Finish setting up your account</h1>
                    <h3 className="text-xl mt-5">Netflix is personalized for you.<br/>Create a password to watch on<br/>device at any time.</h3>
                    <button onClick={() => {navigate("/signup/regform")}} className="bg-[#e50914] rounded-md text-white text-2xl mt-5 p-4">Next</button>
                </div>
        </>
     );
}
 
export default Signup;