/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FullLayout from "@/src/layouts/FullLayout";
import LoadingBar from 'react-top-loading-bar'

// const cart = {
//   "wear-this-code": {
//       qty: 1,
//       price: 400,
//       name: "hello",
//       size: "XL",
//       variant: "blue"
//   }
// }

// myuser : {token, email}
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null }); // value: token, email
  const [key, setKey] = useState();
  const [progress, setProgress] = useState(0)


  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      localStorage.clear()
    }
    const myuser = JSON.parse(localStorage.getItem('myuser'));
    if (myuser) {
      setUser({ value: myuser.token, email: myuser.email })
    }
    setKey(Math.random())
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('myuser');
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let subt = 0;
    let keys = Object.keys(cart)
    for (let i = 0; i < keys.length; i++) {
      subt += cart[keys[i]].price * cart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, size, name, variant };

    setCart(newCart);
    saveCart(newCart);
    router.push('/checkout');
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <LoadingBar color='#ff2d55' progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)} />
    
        {/* https://youtu.be/j2p4OwS5JwU?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&t=673 */}
        {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
        <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
        {/* <style jsx global>{`
        ${ 'body {background: rgb(39,29,56);}' }
      `}</style> */}
        <Footer />

      
  </>
}
