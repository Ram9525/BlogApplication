import React, { useState } from 'react'
import authservice from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Store/authSlice'
import { Button, Input, Logo } from './index'
import {useDispatch, useSelector} from 'react-redux'
import { setLoading } from '../Store/loadingSlice'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const loading = useSelector(state => state.loader.loading)

    const create = async (data) => {
        setError("")
        dispatch(setLoading(true))

        console.log("data", data)
        try {
            const userData = await authservice.createAccount(data)
            // console.log("userData", userData);
            
            if (userData) {
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(login(userData));
                // console.log("userData", userData);
                dispatch(setLoading(false))
                navigate('/')
            }

        } catch (error) {
            dispatch(setLoading(false))
            console.log("error", error);
            setError(error)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full mx-auto max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className="mb-2 flex justify-center">
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>

                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create your account</h2>
                <p className='mt-2 text-center text-black text-base'>
                    Already have any account?&nbsp;
                    <Link
                        to="/login"
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error.message}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label={"Full name: "}
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true
                            })}
                        />

                        <Input
                            label={"Email: "}
                            placeholder="Enter your email"
                            type='email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+()/.test(value) || "Email address must be a valid address"
                                }
                            })}
                        />
                        <Input
                        label={"password: "}
                        placeholder="Enter your password"
                        type='password'
                        {
                            ...register("password",{
                                required:true 
                            })
                        }
                        />
                        <Button
                        type='submit'
                        className='w-full'
                        >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp