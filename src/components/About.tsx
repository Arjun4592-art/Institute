import { BookOpen, type LucideIcon } from 'lucide-react'

interface aboutContentTS {
  icon: LucideIcon
  title: string
  description: string
}
const About = () => {
  const aboutContent: aboutContentTS[] = [
    {
      icon: BookOpen,
      title: 'Industry-Focused Curriculum',
      description:
        'Our course are designed by industry experts to match the latest trends.',
    },
    {
      icon: BookOpen,
      title: 'Hands-On Learning',
      description: 'Learn by building real-world projects and applications.',
    },
    {
      icon: BookOpen,
      title: 'Placement Assistance',
      description:
        'Get 1-on-1 career support and placement assistance to kickstart your career.',
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      description:
        'Learn at your own pace with lifetime access to course tutorials.',
    },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-10 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          02
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          About / why choose us
        </h2>
      </div>
      <div className='grid grid-cols-[40%_60%] gap-8 py-8 px-15'>
        <div>
          <div className='relative inline-flex items-center gap-2 bg-primary-light text-text-primary border border-primary-dark py-1 px-3 rounded-full before:content-[""] before:w-1.5 before:h-1.5 before:bg-primary-dark before:rounded-full'>
            About Us
          </div>
          <h1 className='font-heading text-4xl font-bold py-5'>
            Why Choose <span className='text-primary-light'>CodeFuture?</span>
          </h1>
          <p className='text-text-secondary mb-10 leading-5 text-sm'>
            We are dedicated to providing high-quality coding education with
            practical learning and real-world exposure to help you become a
            successful developer.
          </p>
          <button className='bg-primary-dark/80 rounded-sm  py-2 px-3 text-text-primary border border-primary-dark'>
            Learn More About Us
          </button>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {aboutContent.map((item, _index) => (
            <div
              key={_index}
              className='p-5 shadow-[0_0_8px_#a78bfa] rounded-md'
            >
              <div className='w-8 h-8 bg-primary-light/70 rounded-sm flex items-center justify-center text-text-primary mb-2'>
                <item.icon className='w-4' />
              </div>
              <h1 className='font-bold mb-0.5'>{item?.title}</h1>
              <p className='text-sm leading-4 text-text-secondary'>
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
