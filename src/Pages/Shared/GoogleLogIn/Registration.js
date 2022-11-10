import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogIn from './GoogleLogIn';
import { Navigate } from "react-router-dom";


const Registration = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        createUserWithEmailAndPassword(data.Email, data.Password);
    };

    if (error) {
        return (
            <div>
                <p>Error</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        <Navigate to="/" replace={true} />

    }

    return (
        <div className='md:h-screen text-center w-full max-w-xs mx-auto mt-8'>



            <div className="flex flex-col w-full border-opacity-50 rounded-md bg-base-100 shadow-xl py-10">
                {/* hook from */}
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-xl'>Registration</h1>

                    <div className='card-body'>
                        <div className='form-control w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("firstName", { required: true })}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            {errors.firstName && <p role="alert " className='text-red-500'>Name is required</p>}
                        </div>


                        <div className='form-control w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("Email", { required: true })}
                                aria-invalid={errors.Email ? "true" : "false"}
                            />

                            {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>Eamil is required</p>}
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("Password", { required: "Password Address is required" })}
                                aria-invalid={errors.Password ? "true" : "false"}
                            />
                            {errors.Password && <p role="alert" className='text-red-500'>{errors.Password?.message}</p>}
                        </div>
                        {/* logIn and regi toggle */}
                        <span class="">Please Login <Link to='/login'>now</Link></span>
                        {/* <input type="submit" /> */}
                        <div class="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Registration" />
                            {/* <button class="btn btn-primary w-full" >Registration</button> */}
                        </div>
                    </div>
                    <div class="divider">OR</div>
                    <div class="grid  rounded-box place-items-center">
                        <GoogleLogIn></GoogleLogIn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;