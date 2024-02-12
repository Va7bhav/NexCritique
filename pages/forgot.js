/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name == 'email') { setEmail(e.target.value) }
    if (e.target.name == 'password') { setPassword(e.target.value) }
    if (e.target.name == 'cpassword') { setCPassword(e.target.value) }
  }

  const sendResetEmail = async (e) => {
    e.preventDefault()
    let data = {
      email,
      sendMail: true
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    
    if (response.success) {
      console.log(response.message)
    } else {
      console.log(response.error)
    }
  }

  const resetPassword = async (e) => {
    e.preventDefault()
    if (password == cpassword) {
      let data = {
        email,
        sendMail: false
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();

      if (response.success) {
        console.log("password password has been changed")
      } else {
        console.log("Error")
      }
    } else {
      console.log("error");
    }

  }
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen flex flex-col justify-start px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto rounded-full" src="/logo.jpg" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900">Do not Worry</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {
            router.query.token &&
            <div>
              <form onSubmit={resetPassword} className="space-y-6" method="POST">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                  <div className="mt-2">
                    <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  <div className="mt-2">
                    <input value={cpassword} onChange={handleChange} id="cpassword" name="cpassword" type="password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button onSubmit={resetPassword} type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Change Password</button>
                </div>
                {password!=cpassword && <span className="text-red-400">
                  Passwords do not match
                </span>}
                {password && password==cpassword && <span className="text-green-400">
                  Passwords match
                </span>}
              </form>
            </div>
          }
          {
            !router.query.token &&
            <form onSubmit={sendResetEmail} className="space-y-6" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Enter your Email address</label>
                <div className="mt-2">
                  <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button onSubmit={sendResetEmail} type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Continue</button>
              </div>
            </form>
          }

        </div>
      </div>
    </div>
  )
}

export default Login