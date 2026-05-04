interface featuresTs {
  icon: string
  title: string
  description: string
}
const Features = () => {
  const features: featuresTs[] = [
    {
      icon: '',
      title: 'Live Classes',
      description: 'Interactive live sessions with expert instructors.',
    },
    {
      icon: '',
      title: 'Projects',
      description: 'Build real-world projects for your portfolio.',
    },
    {
      icon: '',
      title: 'Code Reviews',
      description: 'Get Personalised code reviews and feedback.',
    },
    {
      icon: '',
      title: 'Community Support',
      description: 'Join our active community of learners and developers.',
    },
    {
      icon: '',
      title: 'Lifetime Access',
      description: 'Get lifetime access to all course materials.',
    },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-10 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          04
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Our Features
        </h2>
      </div>
      <div className='px-15 py-10'>
        <div className='flex items-center flex-col'>
          <div className='inline-flex items-center gap-2 bg-primary-light/70 py-2 px-4 text-primary-dark rounded-full font-semibold text-sm'>
            Our Features
          </div>
          <h1 className='text-4xl font-bold font-heading py-2 text-dark-100'>
            Everything You Need to{' '}
            <span className='text-primary-light'>Succeed.</span>
          </h1>
        </div>
        <div className='grid grid-cols-5 mt-10 gap-4'>
          {features.map((item, _index) => (
            <div
              key={_index}
              className='p-2 shadow-[0_0_8px_#a78bfa] rounded-md'
            >
              <h1 className='font-heading font-bold mb-2 leading-4.5 text-sm'>
                {item?.title}
              </h1>
              <p className='leading-4 text-text-secondary text-sm'>
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
