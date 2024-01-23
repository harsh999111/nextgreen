import React from 'react'

const Aboutcontact = () => {
  return (
    <section className='h-full w-full pt-40 py-20'>
            <div className='main lg:grid lg:px-16 2xl:px-60'>
                <div className='px-2'>
                    <div>
                        <h2 className='text-green-900 text-center text-3xl font-bold'>Contact</h2>
                    </div>
                    <div className='pt-4'>
                        <p className='text-center text-green-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div>
                  <form  className='px-4 py-6 space-y-3'>

                    <div className='md:grid md:grid-cols-2 md:space-x-2'>

                    <div className='flex flex-col'>
                      <span>First Name:</span>
                    <label htmlFor='name'>
                      <input className='bg-green-50 border border-solid border-green-900 rounded-lg p-2 w-full hover:border-green-900 '/>
                    </label>
                    </div>

                    <div className='flex flex-col'>
                      <span>Surname:</span>
                    <label htmlFor='name'>
                      <input className='bg-green-50 border border-solid border-green-900 rounded-lg p-2 w-full hover:border-green-900'/>
                    </label>
                    </div>
                    </div>

                  <div className='md:grid md:grid-cols-2 md:space-x-2'>

                    <div className='flex flex-col'>
                      <span>Comapny Name:</span>
                    <label htmlFor='name'>
                      <input className='bg-green-50 border border-solid border-green-900 rounded-lg p-2 w-full hover:border-green-900'/>
                    </label>
                    </div>

                    <div className='flex flex-col'>
                      <span>Email:</span>
                    <label htmlFor='name'>
                      <input className='bg-green-50 border border-solid border-green-900 rounded-lg p-2 w-full hover:border-green-900'/>
                    </label>
                    </div>
                  </div>

                    <div className='flex flex-col'>
                      <span>Message:</span>
                      <label htmlFor='message'>
                        <textarea rows={6} cols={20} className='bg-green-50 border border-solid border-green-900 rounded-lg p-2 w-full hover:border-green-900'></textarea>
                      </label>
                    </div>

                    <div className=''>
                      <button className='text-center bg-green-500 px-4 py-2 rounded-lg '>Send Message</button>
                    </div>
                  </form>
                </div>
            </div>
    </section>
  )
}

export default Aboutcontact