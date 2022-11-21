import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import GoogleLogIn from '../Shared/GoogleLogIn/GoogleLogIn';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.Email, data.Password)
    };

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    const [token] = useToken(user);


    // return
    if (error) {
        errorMessage = <p>{error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        console.log(token);
        navigate(from, { replace: true });
    }

    return (
        <div className=' md:h-screen text-center w-full max-w-xs mx-auto mt-8'>
            {/* React hook from */}
            <div className='flex flex-col w-full border-opacity-50 rounded-md bg-base-100 shadow-xl py-10'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='text-center text-xl'>LogIn</h1>
                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input
                            className='input input-bordered w-full max-w-xs'
                            {...register("Email", { required: "Email Address is required" })}
                            aria-invalid={errors.Email ? "true" : "false"}
                        />

                        {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
                    </div>

                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            className='input input-bordered w-full max-w-xs'
                            {...register("Password", { required: "Password Address is required" })}
                            aria-invalid={errors.Password ? "true" : "false"}
                        />
                        {errors.Password && <p role="alert" className='text-red-500'>{errors.Password?.message}</p>}
                    </div>
                    <p className='w-full overflow-hidden text-red-500' >
                        {errorMessage}
                    </p>
                    {/* logIn and regi toggle */}
                    <span className="">Please Login <Link to='/registration'>now</Link></span>
                    {/* <input type="submit" /> */}
                    <div className="card-actions justify-center ">
                        <input className="btn btn-primary w-full" type="submit" value="Login" />
                        {/* <button className="btn btn-primary w-full" >Registration</button> */}
                    </div>

                </form>

                <div className="divider">OR</div>
                <div className="grid  rounded-box place-items-center">
                    <GoogleLogIn></GoogleLogIn>
                </div>
            </div>
        </div>
    );
};

export default Login;