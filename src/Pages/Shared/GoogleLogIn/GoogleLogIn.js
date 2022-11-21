import React,{useState} from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';


const GoogleLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [token] = useToken(user);

    if(token){
        console.log(token);
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button
            onClick={()=>signInWithGoogle()}
                className="btn btn-outline w-full"
            >Continue with Google</button>
        </div>
    );
};

export default GoogleLogIn;