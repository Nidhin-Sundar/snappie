'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn } from "next-auth/react"
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/navigation';


const LoginPage = () => {
 
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const { data: session , status:sessionStatus} = useSession()



  const isValidEmail = (email) =>{
    const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
    };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });

    if(!isValidEmail(email)){
      setError('Invalid email');
      return;
              }

              if(!password || password.length <8) {
                setError('Password is invalid');
                return;
            }  
            
            const res= await signIn("credentials",{
              redirect:false,
              email,
              password,

            });

            // if(res.error) {
            //   setError('Invalid credentials');
            //   if(res.url) router.replace ("/dashboard");
            // } else{
            //   setError("");
            // }

            if (res.error === null) {
              setError(""); // Clear any previous errors
              console.log('Login successful');
              // Redirect to dashboard
              router.replace("/dashboard"); // Assuming "dashboard" is the successful login route
            }
  };

  return (
    <SessionProvider session={session}>
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="Your Company"/> */}
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}  method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
        <div className="mt-2">
          <input
           id="email" 
          name="email" 
          type="email" 
          value={email}  
          autocomplete="email" 
          onChange={(e) => setEmail(e.target.value)}

           required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-white">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input 
          id="password"
           name="password"
            type="password" 
            value={password}  

            autocomplete="current-password" 
            onChange={(e) => setPassword(e.target.value)}

            required 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">{" "}Sign in</button>
        <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>

      </div>
    </form>

    <p className="text-sm text-white text-center mt-4">
        Don't have an account?{' '}
        <Link href="/signup" className="text-green-500 hover:underline">
          Sign Up
        </Link>
      </p>
  </div>
</div>
</SessionProvider>
  );
};

export default LoginPage;
