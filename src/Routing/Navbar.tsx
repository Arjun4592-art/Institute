import { CodeXml } from 'lucide-react'

import { Link, NavLink } from 'react-router'

const Navbar = () => {
  interface Navbar {
    name: string
    path: string
  }
  const navItem: Navbar[] = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/course' },
    { name: 'About Us', path: '/about' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Success Stories', path: '/success' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <div className='flex justify-between items-center py-5 px-15 absolute top-0 left-0 right-0'>
      <Link to={'/'} className='flex items-center gap-1 text-white'>
        <CodeXml className='text-primary-light' size={34} />
        <span className='text-xl font-bold'>CodeFuture</span>
      </Link>
      <ul className='flex gap-4'>
        {navItem.map((item, _index) => (
          <li key={_index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `no-underline transition-colors duration-300 ${
                  isActive
                    ? 'text-primary-light font-semibold'
                    : 'text-white hover:text-primary-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className='bg-primary text-sm text-white rounded-md px-5 py-2.5 cursor-pointer hover:bg-primary-dark transition-colors duration-300'>
        Enroll Now
      </button>
    </div>
  )
}

export default Navbar
