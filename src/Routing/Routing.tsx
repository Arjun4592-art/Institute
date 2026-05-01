import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Courses from '../components/Courses'
import About from '../components/About'
import Mentors from '../components/Mentors'
import Success from '../components/Success'
import Contact from '../components/Contact'
import React from 'react'

const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/success' element={<Success />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </React.Fragment>
  )
}

export default Routing
