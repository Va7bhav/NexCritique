import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";

const Navbar = () => {
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
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className="logo mx-5">
        <Link href={'/'}><Image width={90} height={10} src="/logo.jpg" alt='logo'></Image></Link>
      </div>

      <div className="nav">
        <ul className='flex items-center space-x-6 font-extrabold md:text-md'>
          <Link  href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li> </Link>
          <Link href={'/stickers'}><li>Stickers</li> </Link>
          <Link href={'/mugs'}><li>Mugs</li> </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 top-4 mx-5">
        {<AiOutlineShoppingCart className='text-xl md:text-2xl' />}
      </div>

      <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-xl text-pink-500"><FaRegWindowClose /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the Code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                <FaMinus className='cursor-pointer text-pink-500'/> <span className='mx-2 text-xl'> 1 </span> <FaPlus className='cursor-pointer text-pink-500'/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the Code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                <FaMinus className='cursor-pointer text-pink-500'/> <span className='mx-2 text-xl'> 1 </span> <FaPlus className='cursor-pointer text-pink-500'/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the Code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                <FaMinus className='cursor-pointer text-pink-500'/> <span className='mx-2 text-xl'> 1 </span> <FaPlus className='cursor-pointer text-pink-500'/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the Code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                <FaMinus className='cursor-pointer text-pink-500'/> <span className='mx-2 text-xl'> 1 </span> <FaPlus className='cursor-pointer text-pink-500'/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the Code</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-sm'>
                <FaMinus className='cursor-pointer text-pink-500'/> <span className='mx-2 text-xl'> 1 </span> <FaPlus className='cursor-pointer text-pink-500'/>
              </div>
            </div>
          </li>
        </ol>
        <div className="flex justify-center">
          <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagAdd className='mt-1' />Checkout</button>
          <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear-Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar