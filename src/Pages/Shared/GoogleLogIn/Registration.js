import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogIn from './GoogleLogIn';

import useToken from '../../../Hooks/useToken';
import Loading from '../Loading';
import { useNavigate  } from "react-router-dom";



const Registration = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, Nupdating, Nerror] = useUpdateProfile(auth);

    // token hook use for users validation:
    const [token] = useToken(user);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.Email, data.Password);
        await updateProfile({ displayName: data.firstName });
        console.log('successs', data.firstName);
    };

    let Rerror;
    const navigate = useNavigate();

    if (error) {
        Rerror = <p>Error {error.message}</p>

    }
    if (loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate("/");
    }

    return (
        <div className=' md:h-screen text-center w-full max-w-xs mx-auto '>

            <div className="flex flex-col w-full border-opacity-50 rounded-md bg-base-100 shadow-xl py-10">
                {/* hook from */}
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-xl'>Registration</h1>

                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input
                            className='input input-bordered w-full max-w-xs'
                            {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        {errors.firstName && <p role="alert " className='text-red-500'>Name is required</p>}
                    </div>


                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input
                            className='input input-bordered w-full max-w-xs'
                            {...register("Email", { required: true })}
                            aria-invalid={errors.Email ? "true" : "false"}
                        />

                        {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>Eamil is required</p>}
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
                    {Rerror}
                    {/* logIn and regi toggle */}
                    <span className="">Please Login <Link to='/login'>now</Link></span>
                    {/* <input type="submit" /> */}
                    <div className="card-actions justify-center ">
                        <input className="btn btn-primary w-full" type="submit" value="Registration" />
                        {/* <button className="btn btn-primary w-full" >Registration</button> */}
                    </div>

                </form>
                <div className="divider">OR</div>
                <div className="w-full">
                    <GoogleLogIn></GoogleLogIn>
                </div>
            </div>
        </div>
    );
};

export default Registration;