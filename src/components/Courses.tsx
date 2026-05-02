interface courseTs {
  image: string
  title: string
  description: string
  duration: string
}
const Courses = () => {
  const courses: courseTs[] = [
    {
      image: '',
      title: 'Full Stack Web Development',
      description: 'Learn MERN Stack and build modern web applications.',
      duration: '6 Months',
    },
    {
      image: '',
      title: 'Python Programming',
      description: 'Master python programming from basic to advanced.',
      duration: '4 Months',
    },
    {
      image: '',
      title: 'App Development',
      description: 'Build cross-platform mobile apps with flutter.',
      duration: '5 Months',
    },
    {
      image: '',
      title: 'JavaScript Mastery',
      description: 'Deep dive into JavaScript and modern framworks.',
      duration: '3 Months',
    },
    {
      image: '',
      title: 'Data Structures & Algorithms',
      description: 'Strengthen your problem solving and DSA skills.',
      duration: '3 Months',
    },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-12 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          03
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Courses <br />
          We Offer
        </h2>
      </div>
      <div className='bg-dark-300 px-15 py-10'>
        <div className='flex items-center flex-col'>
          <div className='inline-flex py-0.5 px-2 bg-primary-light/70 rounded-full text-text-primary'>
            Our Courses
          </div>
          <h1 className='my-3 mb-1 text-3xl font-bold font-heading text-text-secondary'>
            <span className='text-primary-light'>Courses</span> We Offer
          </h1>
          <p className='text-text-secondary text-sm'>
            Explore our industry-relevant courses and choose the path that suits
            you goals
          </p>
        </div>
        <div className='mt-10 grid grid-cols-5 gap-4'>
          {courses.map((item, _index) => (
            <div
              key={_index}
              className='border border-dark-400 py-3 px-4 bg-dark-200 rounded-md'
            >
              <div>
                <div>
                  <img src={item?.image} alt='' />
                </div>
              </div>
              <h1 className='text-text-primary leading-4 mb-4 mt-1 font-semibold font-heading'>
                {item?.title}
              </h1>
              <p className='text-text-secondary text-sm leading-4 mb-4'>
                {item?.description}
              </p>
              <p className='text-primary-dark text-xs'>
                Duration:{' '}
                <span className='text-text-primary'>{item?.duration}</span>
              </p>
            </div>
          ))}
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <button className='bg-primary-dark text-text-secondary py-2 px-4 rounded-md'>
            View All Courses
          </button>
        </div>
      </div>
    </div>
  )
}

export default Courses
