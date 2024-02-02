/* eslint-disable react/prop-types */
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full');
      ref.current.classList.remove('translate-x-0');
    }
  }
  const ref = useRef();
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className="logo mx-5">
        <Link href={'/'}><Image className='rounded-full' width={90} height={10} src="/logo.jpg" alt='logo'></Image></Link>
      </div>

      <div className="nav">
        <ul className='flex items-center space-x-6 font-extrabold md:text-md'>
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li> </Link>
          <Link href={'/stickers'}><li>Stickers</li> </Link>
          <Link href={'/mugs'}><li>Mugs</li> </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 top-4 mx-5">
        {<AiOutlineShoppingCart className='text-xl md:text-2xl' />}
      </div>

      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0': 'translate-x-full'}`}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-xl text-pink-500"><FaRegWindowClose /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='text-center mt-2 mb-2'>Your Cart is Empty</div>}
          {Object.keys(cart).map((k) => {
            console.log(k);
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                  <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                    <FaMinus onClick={()=>removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-pink-500' /> <span className='mx-2 text-xl'> {cart[k].qty} </span> <FaPlus onClick={()=>addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-pink-500' />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="font-bold my-2 text-center">Subtotal: ₹{subTotal}</div>
        <div className="flex justify-center">
          <Link href={'/checkout'}>
          <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagAdd className='mt-1' />Checkout</button>
          </Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear-Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar