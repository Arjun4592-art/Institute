interface SuccessStoriesTS {
  image: string
  name: string
  placement: string
  reviews: string
  ratings: number
}
const Success = () => {
  const SuccessStories: SuccessStoriesTS[] = [
    {
      image: '',
      name: 'Rohit Sharma',
      placement: 'Full Stack Developer at TCS',
      reviews:
        'CodeFuture transformed my career. The mentors are amazing and the curriculum is to top-notch.',
      ratings: 5,
    },
    {
      image: '',
      name: 'Priya Verma',
      placement: 'Software Engineer at Infosys',
      reviews:
        'CodeFuture transformed my career. The mentors are amazing and the curriculum is to top-notch.',
      ratings: 5,
    },
    {
      image: '',
      name: 'Aman Singh',
      placement: 'SDE at Amazon',
      reviews:
        'CodeFuture transformed my career. The mentors are amazing and the curriculum is to top-notch.',
      ratings: 5,
    },
  ]
  return (
    <div className='grid grid-cols-[15%_85%]'>
      <div className='bg-dark-200 p-5 text-white border-r-4 border-t-4 border-text-secondary'>
        <h3 className='relative text-4xl font-bold after:content-[""] after:absolute after:w-12 after:h-1 after:z-2 after:bg-primary after:left-0 after:-bottom-4'>
          05
        </h3>
        <h2 className='text-xl mt-8 leading-6 font-bold uppercase'>
          Success Stories
        </h2>
      </div>
      <div className='bg-dark-300 px-15 py-10'>
        <div className='flex items-center flex-col'>
          <div className='inline-flex items-center gap-2 bg-primary-light py-2 px-4 rounded-full font-heading font-semibold text-text-primary text-sm'>
            Success Stories
          </div>
          <h1 className='my-3 mb-1 text-4xl font-bold font-heading text-text-primary'>
            What Our <span className='text-primary-light'>Students</span> Say.
          </h1>
          <p className='text-text-secondary'>
            Our students success is our pride. Here's what they have to say
            about CodeFuture.
          </p>
        </div>
        <div className='grid grid-cols-3 my-5 gap-8'>
          {SuccessStories.map((item, _index) => (
            <div
              key={_index}
              className='bg-dark-400 border border-text-secondary rounded-md py-2.5 px-4'
            >
              <div>
                <img src={item?.image} alt='' />
              </div>
              <div className='text-text-primary'>
                <div>
                  <p>{item?.ratings}</p>
                </div>
                <p className='leading-4 my-3 text-text-secondary'>
                  {item?.reviews}
                </p>
                <h1 className='font-semibold text-primary-light'>
                  {item?.name}
                </h1>
                <p className='text-xs'>{item?.placement}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-2 mt-8'>
          {SuccessStories.map((_index) => (
            <div className='w-3 h-3 bg-text-primary rounded-full'></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Success
