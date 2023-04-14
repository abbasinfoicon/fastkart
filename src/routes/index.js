import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Faq from '../pages/Faq'
import ComingSoon from '../pages/ComingSoon'
import PageNotFound from '../pages/PageNotFound'
import Blog from '../pages/Blog'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Cart from '../components/templates/Cart'
import Checkout from '../components/templates/Checkout'
import Wishlist from '../components/templates/Wishlist'
import Compare from '../components/templates/Compare'
import Otp from '../pages/auth/Otp'

const index = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/otp' element={<Otp />} />

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/faq' element={<Faq />} />

      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/compare' element={<Compare />} />

      <Route path='/coming-soon' element={<ComingSoon />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default index