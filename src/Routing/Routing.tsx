import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Courses from '../components/Courses'
import About from '../components/About'
import Mentors from '../components/Mentors'
import Success from '../components/Success'
import Contact from '../components/Contact'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/about' element={<About />} />
      <Route path='/mentors' element={<Mentors />} />
      <Route path='/success' element={<Success />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Routing
