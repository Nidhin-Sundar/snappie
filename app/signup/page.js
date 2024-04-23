'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');


    const router = useRouter();
const isValidEmail = (email) =>{
const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
return emailRegex.test(email);
};

    const handleSubmit = async (e) => {
        e.preventDefault();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

        if(!isValidEmail(email)){
setError('Invalid email');
return;
        }
        
        if(!password || password.length <8) {
            setError('Password is invalid');
            return;
        }

        try{
const res=await fetch("/api/signup",{
    method: 'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        name,
        email,
        password,
    }),
});
if(res.status===400){
    setError('This Email is already registered');
}
if(res.status === 200) {
    setError("");
    router.push("/");
}
        }
        catch (error){
            setError("Error, try again");
            console.log(error);
        }

        console.log('Signup submitted:', { name, email, password });
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign Up</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                          
                        <div className="mt-2">
                        <input 
                        id="name" 
                        name="name"
                        placeholder='Name'
                         type="text"
                            value={name}  
                             onChange={(e) => setName(e.target.value)}
                              required 
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                         </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
                            </button>
                            <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
                        </div>
                    </form>
               < div className='mt-2' >
                
        <Link href="/" className="text-black hover:underline">
         Login with an existing account
        </Link>
                </div> 
      
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
