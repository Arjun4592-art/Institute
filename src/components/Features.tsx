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
      <div>
        <div>
          <div>Our Features</div>
          <h1>Everything You Need to Succeed</h1>
        </div>
        <div>
          {features.map((item, _index) => (
            <div key={_index}>
              <h1>{item?.title}</h1>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
