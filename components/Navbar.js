import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
      <div className="logo mx-5">
        <Image width={90} height={10} src="/logo.jpg" alt='logo'></Image>
      </div>

      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href={'/'}><li>Tshirts</li></Link>
          <Link href={'/'}><li>Hoodies</li> </Link>
          <Link href={'/'}><li>Stickers</li> </Link>
          <Link href={'/'}><li>Mugs</li> </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <button>
          {<AiOutlineShoppingCart className='text-xl md:text-3xl'/>}
        </button>
      </div>
    </div>
  )
}

export default Navbar