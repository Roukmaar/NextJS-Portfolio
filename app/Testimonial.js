import React from 'react'

function Testimonial() {
  return (
        <section className='bg-[rgba(201,201,228,0.6)]'>
            <div className="container py-10 mx-auto px-6 md:px-12">
                <div className="text-center mb-10">
                    <p className='text-purple-700 text-xl text-center mb-2'>What Clients think About Me?</p>
                    <h2 className="text-4xl font-bold mb-20 text-gray-800">Testimonials</h2>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex-1  border-t-1 border-violet-300 rounded-lg shadow-lg p-10'>
                            <img src='/icon.png'
                                    className='rounded-lg w-30 mb-3'/>        
                            <p>
                                "Roukmaar is an exceptional developer who consistently delivers high-quality work on time. His attention to detail and problem-solving skills are impressive. I highly recommend him for any web development project."
                            </p>
                            <h2 className='text-xl text-purple-700 mb-5'>
                                Jack Harlow
                            </h2>
                        </div>
                        <div className='flex-1 border-t border-violet-300 rounded-lg shadow-lg p-10'>
                            <img src='/iconf.png'
                            className='rounded-lg w-30 mb-3'/>
                            <p>
                                "Working with Roukmaar was a fantastic experience. He understood our requirements perfectly and translated them into a beautiful, functional website. His communication throughout the project was excellent, and he went above and beyond to ensure our satisfaction."
                            </p>
                            <h2 className='text-xl text-purple-700 mb-5'>
                                Krystal J
                            </h2>

                            
                            </div>
                    </div>
                </div>
            </div> 
        </section>
  )
}

export default Testimonial;
