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

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path='/faq' element={<Faq />} />

      <Route path='/coming-soon' element={<ComingSoon />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default index