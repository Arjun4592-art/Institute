import { Play } from 'lucide-react'
import bgImage from '../assets/background.png'
import Navbar from '../Routing/Navbar'

interface AchivementTS {
  data: string
  title: string
}
const HeroSection = () => {
  const Achivement: AchivementTS[] = [
    { data: '25+', title: 'Courses' },
    { data: '10K+', title: 'Students' },
    { data: '500+', title: 'Projects' },
    { data: '95%', title: 'Placement Rate' },
  ]

  return (
    <div className='grid grid-cols-[15%_85%] min-h-screen'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-10 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          01
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Hero Section
        </h2>
      </div>
      <div
        className='bg-contain relative flex items-center bg-bottom-right bg-no-repeat bg-dark-300 px-16'
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,15,42,0.9), rgba(26,31,74,0.8), rgba(124,58,237,0.7)), url(${bgImage})`,
        }}
      >
        <Navbar />
        <div className='pt-10'>
          <div className='inline-flex items-center p-[0.4rem_1rem] rounded-full text-[0.75rem] gap-2 text-primary-light border border-primary-light bg-dark-100 font-bold uppercase before:content-[""] before:w-1.75 before:h-1.75 before:bg-primary-dark before:rounded-full before:shadow[0_0_0_6px_#a78bfa] before:animate-pulse-mine'>
            Build • Code • Succed
          </div>
          <h4 className='text-white text-5xl font-semibold py-6 font-heading'>
            Learn Coding. <br />
            Build Your <span className='text-primary-light'>Future.</span>
          </h4>
          <p className='text-[1rem] leading-[1.75] text-text-secondary max-w-105 mb-5'>
            Join CodeFuture, the best place to start your coding journey. Learn
            from industry experts and build real-world projects that make you
            job-ready.
          </p>
          <div className='flex gap-4 items-center flex-wrap mb-10'>
            <button className='text-text-primary border-2 border-primary-dark bg-primary-dark rounded-sm py-2 px-3'>
              Explore Courses
            </button>
            <button className='flex gap-2 text-text-primary border-2 border-text-secondary py-2 px-3 rounded-sm'>
              Watch Demo <Play />
            </button>
          </div>
          <div className='flex'>
            {Achivement.map((item, _index) => (
              <div className='border-r-2 last:border-0 px-5 first:pl-0 border-dark-300'>
                <h2 className='text-primary text-xl font-bold'>{item.data}</h2>
                <p className='text-text-secondary text-xs'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
