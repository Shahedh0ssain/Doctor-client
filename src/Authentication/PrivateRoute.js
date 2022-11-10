import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';


const PrivateRoute = () => {

    let location = useLocation();
    const [user,loading] = useAuthState(auth);
  
    if(loading){
        return <Loading></Loading>
      }

    if (!user) {
    //   return   redirect("/login");
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return <Outlet />;
};

export default PrivateRoute;