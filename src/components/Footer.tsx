import { CodeXml, MoveRight } from 'lucide-react'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import call from '../assets/call.png'
import mapPin from '../assets/map-pin.png'
import mail from '../assets/Mail.png'

const Footer = () => {
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
        <div className='border-t border-text-secondary'>
          <div>
            <h1>
              <CodeXml /> CodeFuture
            </h1>
            <p>
              Empowering the next generation of developers with Quality
              education and real-world skills.
            </p>
            <div>
              <div>
                <img src={facebook} alt='' />
              </div>
              <div>
                <img src={instagram} alt='' />
              </div>
              <div>
                <img src={twitter} alt='' />
              </div>
              <div>
                <img src={linkedin} alt='' />
              </div>
            </div>
          </div>
          <div>
            <h1>Quick Links</h1>
            <div>
              <p>Home</p>
              <p>About</p>
            </div>
          </div>
          <div>
            <h1>Quick Links</h1>
            <div>
              <p>Home</p>
              <p>About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
