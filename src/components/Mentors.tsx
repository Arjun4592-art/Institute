interface mentorsTs {
  name: string
  course: string
  experience: string
  image: string
  sociallinks: [string, string]
}

const Mentors = () => {
  const mentorsData: mentorsTs[] = [
    {
      name: 'Rajesh Kumar',
      course: 'Full Stack Developer',
      experience: '8+ Years of Experience',
      image: '',
      sociallinks: ['1', '2'],
    },
    {
      name: 'Anjali Mehta',
      course: 'Python Developer',
      experience: '6+ Years of Experience',
      image: '',
      sociallinks: ['', ''],
    },
    {
      name: 'Vikram Singh',
      course: 'Data Science Engineer',
      experience: '7+ Years of Experience',
      image: '',
      sociallinks: ['', ''],
    },
    {
      name: 'Saurabh Patel',
      course: 'Flutter Developer',
      experience: '5+ Years of Experience',
      image: '',
      sociallinks: ['', ''],
    },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-12 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          06
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Our Mentors
        </h2>
      </div>
      <div className='px-15 py-10'>
        <div className='flex items-center flex-col'>
          <div className='inline-flex items-center gap-2 bg-primary-light py-2 px-4 rounded-full font-heading font-semibold text-text-primary text-sm'>
            Our Mentors
          </div>
          <h1 className='my-3 mb-1 text-4xl font-bold font-heading text-dark-400'>
            Learn from Industry{' '}
            <span className='text-primary-light'>Experts.</span>
          </h1>
          <p className='text-text-secondary'>
            Our mentors are experienced professionals who are passionate about
            teaching.
          </p>
        </div>
        <div className='grid grid-cols-4 mt-8 gap-8'>
          {mentorsData.map((item, _index) => (
            <div
              key={_index}
              className='shadow-[0_0_8px_var(--color-primary-light)] rounded-md'
            >
              <div className='h-40 bg-text-secondary/40 rounded-t-md'>
                <img src={item?.image} alt='' />
              </div>
              <div className='leading-6 text-center py-2.5 px-3'>
                <h1 className='font-bold font-heading text-primary-light'>
                  {item?.name}
                </h1>
                <p>{item?.course}</p>
                <p className='font-semibold'>{item?.experience}</p>
              </div>
              <div className='mb-4 flex justify-center gap-8'>
                {item.sociallinks &&
                  item.sociallinks.map((links, _id) => (
                    <button
                      key={_id}
                      className='w-10 h-10 bg-primary-light/40 rounded-md border border-primary-light'
                    >
                      {links}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mentors
