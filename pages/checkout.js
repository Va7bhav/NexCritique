/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import Link from 'next/link'
import { useRouter } from 'next/router';

const Checkout = ({ cart, clearCart, subTotal, addToCart, removeFromCart }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [transMessage, setTransMessage] = useState('');

  const handleChange = (e) => {
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
    if (name && email && phone && address && pincode) {
      setDisabled(false)
    }
  }
  const handlePayment = async (e) => {

    e.preventDefault();
    const data = { email, orderId: Date.now(), products: cart, address, amount: subTotal };
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addorder`, {
      method: "POST",
      // mode: "cors", 
      // cache: "no-cache", 
      // credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    let response = await res.json();

    if (response.success) {
      clearCart()
      router.push('/order')
    } else {
      setTransMessage(response.message);
    }
  }
  return (
    <div className='container px-20 sm:m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='text-gray-500 text-xl font-bold text-center'> Add Delivery Details </h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input value={city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
          </div>
        </div>
      </div>
      <h2 className='text-gray-500 text-xl font-bold text-center'> Review Cart Items </h2>
      <div className="sideCart bg-pink-100 p-6 m-2">


        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='text-center mt-2 mb-2'>Your Cart is Empty</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className='font-semibold'>{cart[k].name} ({cart[k].variant} / {cart[k].size})</div>
                  <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                    <FaMinus onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-pink-500' /> <span className='mx-2 text-xl'> {cart[k].qty} </span> <FaPlus onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-pink-500' />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <span className="font-bold">Subtotal: ₹{subTotal}</span>

      </div>
      {Object.keys(cart).length && <div className="flex mx-4 items-center">
        <Link href={'/checkout'}>
          <button onClick={handlePayment} disabled={disabled} className="disabled:bg-pink-300 flex items-center mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagAdd className='mt-1' />Pay ₹{subTotal}</button>
        </Link>
        <h1 className='text-pink-700 text-xl text-center font-bold'>{transMessage}</h1>
      </div>}

    </div>
  )
}

export default Checkout