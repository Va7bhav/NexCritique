/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Product from '@/models/Product'
import mongoose from 'mongoose'
import Link from 'next/link'
import React from 'react'

const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p> Sorry! All the Hoodies are currently out of Stock, stock will be refilled in coming days!</p>}
            {
              Object.keys(products).map((hoodie) => {

                return (
                  <div key={products[hoodie]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
                    <Link href={`product/${products[hoodie].slug}`}>
                      <div className="block relative rounded overflow-hidden">
                        <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={products[hoodie].img} />
                      </div>
                    </Link>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                      <Link href={`product/${products[hoodie].slug}`}><h2 className="text-gray-900 title-font text-lg font-medium">{products[hoodie].title}</h2></Link>
                      <p className="mt-1">{products[hoodie].price}</p>
                      <div className="flex justify-center md:justify-start my-2">
                        {products[hoodie].size.map((s) => {
                          return (
                            <div key={s} className='border border-gray-400 px-1 bg-gray-200 mx-1'>
                              {s}
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex justify-center md:justify-start my-2">
                        {products[hoodie].color.map((c) => {
                          return (
                            <button key={c} className={`bg-${c}-500 border-2 border-gray- 300 rounded-full w-6 h-6 focus:outline-none mx-1`} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: 'hoodie' });
  let hoodies = {}; // thirts: {'hoodie.title': {...property of that hoodie model}}
  for (let product of products) {
    if (product.title in hoodies) {
      if (!hoodies[product.title].color.includes(product.color) && product.availableQty > 0) {
        hoodies[product.title].color.push(product.color);
      }
      if (!hoodies[product.title].size.includes(product.size) && product.availableQty > 0) {
        hoodies[product.title].size.push(product.size);
      }

    } else {
      hoodies[product.title] = JSON.parse(JSON.stringify(product));
      if (product.availableQty > 0) {
        hoodies[product.title].color = [product.color]
        hoodies[product.title].size = [product.size]
      }
    }
  }
  return {
    props: { products: hoodies }
  }
}

export default Hoodies



