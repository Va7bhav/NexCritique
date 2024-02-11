/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [orders, setOrders] = useState({})
  const router = useRouter();
  const fetchOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
      method: "POST",
      // mode: "cors", 
      // cache: "no-cache", 
      // credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      body: JSON.stringify({ token: JSON.parse(localStorage.getItem('myuser')).token }),
    });
    let response = await res.json();
    setOrders(response.orders)
    console.log(orders);
  }

  useEffect(() => {
    if (!localStorage.getItem('myuser')) {
      router.push('/')
    } else {
      fetchOrders();
    }
  }, [])
  return (

    <div className='min-h-screen'>
      <h2 className="text-3xl font-extrabold dark:text-gray-700 text-center my-2 underline">My Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="my-10 w-5/6 m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                info
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(orders).map((key) => {
              return (
                  <tr key={key} className='hover:opacity-90'>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {orders[key].orderId}
                    </th>
                    <td className="px-6 py-4">
                      {orders[key].amount}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {orders[key].address}
                    </td>
                    <td className="px-6 py-4">
                      <Link className={'text-blue-500'} href={`/order?id=${orders[key]._id}`}><button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Check</button></Link>
                    </td>
                  </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders