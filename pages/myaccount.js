/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
	const router = useRouter();
	const [name, setName] = useState('')
	const [email, setEmail] = useState()
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [pincode, setPincode] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [user, setUser] = useState({ value: null });
	const [password, setPassword] = useState('')
	const [npassword, setNPassword] = useState('')
	const [cpassword, setCPassword] = useState('')

	useEffect(() => {
		const myuser = JSON.parse(localStorage.getItem('myuser'))
		if (!myuser) {
			router.push('/')
		}
		if (myuser && myuser.token) {
			setUser(myuser);
			setEmail(myuser.email);
		}
		fetchData(myuser.token);
	}, [])

	const fetchData = async (token) => {
		const data = { token: token };
		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let response = await res.json()
		console.log(response);
		setName(response.name)
		setAddress(response.address)
		setPincode(response.pincode)
		setPhone(response.phone)
	}

	const handleUserSubmit = async () => {


		const data = { token: user.token, address, pincode, phone, name };
		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let response = await res.json()
		console.log(response);
		if (response.success) {
			console.log(response.success);
			toast.success(response.message, {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	}
	const handlePasswordSubmit = async () => {
		if (npassword == cpassword) {
			const data = { token: user.token, password, npassword, cpassword };
			const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			let response = await res.json()
			console.log(response);
			if (response.success) {
				console.log(response.success);
				toast.success(response.message, {
					position: "top-left",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} else {
			toast.error("Passwords do not match", {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
		setPassword('')
		setCPassword('')
		setNPassword('')
	}

	const handleChange = async (e) => {

		if (e.target.name == 'name') {
			setName(e.target.value);
		}
		else if (e.target.name == 'email') {
			setEmail(e.target.value);
		}
		else if (e.target.name == 'phone') {
			setPhone(e.target.value);
		}
		else if (e.target.name == 'address') {
			setAddress(e.target.value);
		}
		else if (e.target.name == 'pincode') {
			setPincode(e.target.value);
		}
		else if (e.target.name == 'password') {
			setPassword(e.target.value);
		}
		else if (e.target.name == 'cpassword') {
			setCPassword(e.target.value);
		}
		else if (e.target.name == 'npassword') {
			setNPassword(e.target.value);
		}
	}

	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<h1 className='font-bold text-3xl my-8 text-center'>Update your Account</h1>
			<h2 className='text-gray-500 text-xl font-bold text-center'> Delivery Details </h2>
			<div className="mx-auto flex my-2">
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
						<input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">Email (cannot be updated)</label>
						<input value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-pink-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
					</div>
				</div>
			</div>
			<div className="px-2 w-full">
				<div className="mb-4">
					<label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
					<textarea onChange={handleChange} value={address} name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
				</div>
			</div>
			<div className="mx-auto flex my-2">
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
						<input onChange={handleChange} value={phone} type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
						<input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>
			</div>
			<div className='flex justify-center my-10'>
				<button onClick={handleUserSubmit} className="w-200 disabled:bg-pink-300 flex items-center justify-center text-white bg-pink-500 border-0 py-2 px-20 focus:outline-none hover:bg-pink-600 rounded text-sm"> Update Details </button>
			</div>
			<h2 className='text-gray-500 text-xl font-bold text-center'> Change Password </h2>
			<div className="mx-auto flex my-2">
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="password" className="leading-7 text-sm text-gray-600">Old Password</label>
						<input onChange={handleChange} value={password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
						<input onChange={handleChange} value={npassword} type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>
				<div className="px-2 w-1/2">
					<div className="mb-4">
						<label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
						<input onChange={handleChange} value={cpassword} type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
					</div>
				</div>


			</div>
			<div className='flex justify-center my-10'>
				<button onClick={handlePasswordSubmit} className="w-200 disabled:bg-pink-300 flex items-center justify-center text-white bg-pink-500 border-0 py-2 px-20 focus:outline-none hover:bg-pink-600 rounded text-sm"> Update Password </button>
			</div>
		</>
	)
}


export default MyAccount