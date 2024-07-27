import { IoClose } from "react-icons/io5";

import { useState } from "react";
export default function LoginForm({ setIsLoginFormOpen, isLoginFormOpen }) {
    const [userSignUp, setUserSignUp] = useState(false)
    const handleCloseLoginForm = (e) => {
        e.preventDefault()

        setIsLoginFormOpen(false)
    }

    const handleSignUpForm = (e) => {
        e.preventDefault()

        setUserSignUp(true)
    }

    const handleGoToLoginForm = (e) => {
        e.preventDefault()
        setUserSignUp(false)
    }
    return (
        <form action="" className={`customLoginCard fixed w-80 sm:w-96 h-auto rounded-md p-4  ${isLoginFormOpen ? 'open' : ''}`}>
            {/* if you have already account */}

            {userSignUp === false &&
                <>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-center text-3xl font-bold ">Log in</h1>
                        <button onClick={(e) => handleCloseLoginForm(e)}><IoClose className="text-2xl" /></button>
                    </div>

                    <div className="customLoginForm flex flex-col gap-y-4">
                        <input type="text" name="" id="" placeholder="Enter Username" className='p-2 rounded-md' />

                        <input type="text" placeholder="Enter Password" className='p-2 rounded-md' />

                        <div className="flex gap-x-4 items-center justify-center">
                            <button onClick={(e) => handleCloseLoginForm(e)} className="loginBtn rounded-md">Login</button>
                            <button onClick={(e) => handleSignUpForm(e)} className="signUpBtn rounded-md">Sign Up</button>
                        </div>
                    </div>
                </>

            }

            {/* if you don't have a account */}
            {userSignUp &&
                <>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-center text-3xl font-bold ">Create Account</h1>
                            <button onClick={(e) => handleCloseLoginForm(e)}><IoClose className="text-2xl" /></button>
                        </div>

                        <div className="customLoginForm flex flex-col gap-y-4">
                            <input type="email" name="" id="" placeholder="Enter Email" className='p-2 rounded-md' />

                            <input type="text" placeholder="Enter Password" className='p-2 rounded-md' />

                            <input type="text" placeholder="Confirm Password" className='p-2 rounded-md' />

                            <div className="flex gap-x-4 items-center justify-center">
                                <button onClick={(e) => handleGoToLoginForm(e)} className="signUpBtn rounded-md">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </form>
    )
}