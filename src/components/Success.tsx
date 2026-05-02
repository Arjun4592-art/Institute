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
          <div className='inline-flex items-center gap-2 bg-primary-light py-0.5 px-2 rounded-full font-heading font-semibold text-text-primary'>
            Success Stories
          </div>
          <h1 className='my-3 mb-1 text-3xl font-bold font-heading text-text-primary'>
            What Our <span className='text-primary-light'>Students</span> Say
          </h1>
          <p className='text-text-secondary'>
            Our students success is our pride. Here's what they have to say
            about CodeFuture.
          </p>
        </div>
        <div>
          {SuccessStories.map((item, _index) => (
            <div key={_index}>
              <div>
                <img src={item?.image} alt='' />
              </div>
              <div>
                <div>
                  <p>{item?.ratings}</p>
                </div>
                <p>{item?.reviews}</p>
                <h1>{item?.name}</h1>
                <p>{item?.placement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Success
