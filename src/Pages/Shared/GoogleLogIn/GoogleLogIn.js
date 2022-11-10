import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const GoogleLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button
            onClick={()=>signInWithGoogle()}
                className="btn btn-outline"
            >Continue with Google</button>
        </div>
    );
};

export default GoogleLogIn;