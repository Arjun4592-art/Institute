import {
  CodeXml,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  type LucideIcon,
} from 'lucide-react'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router'

interface NavbarTS {
  name: string
  path: string
}

interface CoursesTS {
  name: string
  path: string
}

interface AddressTs {
  icon: LucideIcon
  data: string
}

const Footer = () => {
  const navbar: NavbarTS[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/' },
    { name: 'Contact Us', path: '/' },
    { name: 'Features', path: '/' },
    { name: 'Success Stories', path: '/' },
    { name: 'Mentors', path: '/' },
  ]

  const Courses: CoursesTS[] = [
    { name: 'Full Stack Development', path: '/' },
    { name: 'Python Development', path: '/' },
    { name: 'App Development/ Flutter', path: '/' },
    { name: 'JavaScript Mastery', path: '/' },
    { name: 'Data Structure & Algorithms', path: '/' },
  ]

  const address: AddressTs[] = [
    { icon: Mail, data: 'email@gmail.com' },
    { icon: MapPin, data: 'email@gmail.com' },
    { icon: Phone, data: 'email@gmail.com' },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-12 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          07
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Call to action & Footer
        </h2>
      </div>
      <div className='bg-dark-300'>
        {' '}
        <div className='flex items-center flex-col py-10 px-15'>
          <h1 className='my-3 mb-1 text-4xl font-bold font-heading text-text-primary'>
            Ready to Start Your{' '}
            <span className='text-primary-light'>Coding Journey.</span>
          </h1>
          <p className='text-text-secondary text-sm'>
            Explore our industry-relevant courses and choose the path that suits
            you goals
          </p>
          <button className='bg-primary-dark/80 rounded-sm  py-2 px-3 text-text-primary border border-primary-dark flex gap-3 mt-8'>
            Enroll Now Today <MoveRight />
          </button>
        </div>
        {/* footer Section Start  */}
        <div className='relative border-t border-text-secondary text-text-secondary grid grid-cols-4 py-10 pb-15 px-15 gap-20'>
          <div>
            <h1 className='flex gap-1 items-center mb-3'>
              <CodeXml size={30} className='text-primary-light' />
              <span className='font-bold text-2xl'>CodeFuture.</span>
            </h1>
            <p className='leading-4.5 mb-2'>
              Empowering the next generation of developers with Quality
              education and real-world skills.
            </p>
            <div className='flex gap-1'>
              <div className='w-5 h-5 bg-white p-1 rounded-full'>
                <img src={facebook} alt='' className='object-contain' />
              </div>
              <div className='w-5 h-5 bg-white p-1 rounded-full'>
                <img src={instagram} alt='' className='object-contain' />
              </div>
              <div className='w-5 h-5 bg-white p-1 rounded-full'>
                <img src={twitter} alt='' className='object-contain' />
              </div>
              <div className='w-5 h-5 bg-white p-1 rounded-full'>
                <img src={linkedin} alt='' className='object-contain' />
              </div>
            </div>
          </div>
          <div>
            <h1 className='font-bold mb-3'>Quick Links</h1>
            <div className='flex flex-col'>
              {navbar.map((item, _index) => (
                <Link to={item.path} key={_index} className='text-sm'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className='font-bold mb-3'>Courses</h1>
            <div className='flex flex-col'>
              {Courses.map((item, _index) => (
                <Link to={item.path} key={_index} className='text-sm'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className='font-bold mb-3'>Contact Us</h1>
            {address.map((item, _index) => (
              <div className='flex gap-2 items-center mb-1' key={_index}>
                <item.icon size={16} />
                <p className='text-sm'>{item.data}</p>
              </div>
            ))}
          </div>

          {/* Privacy Policy  */}
          <div className='bg-dark-400 absolute left-0 right-0 bottom-0 py-2 flex items-center justify-center'>
            <p>@2026 CreativeAddhyan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
