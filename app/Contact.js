import React from 'react'

function Contact() {
  return (
        <section className='bg-[rgba(201,201,228,0.6)]'>
            <div className="container py-10 mx-auto px-6 md:px-12">
                <div className="text-center mb-10">
                    <p className='text-purple-700 text-xl text-center mb-2'>How To Communicate?</p>
                    <h2 className="text-4xl font-bold mb-20 text-gray-800">Contact Me</h2>
                    <form className='flex flex-col items-center p-10 rounded-lg shadow-lg'>
                        <input type="text" placeholder="Your Name" className='w-full md:w-1/2 p-3 mb-5 rounded-lg border border-purple-100 hover:border-purple-300 hover:transition duration-300 ease-in-out cursor-pointer'/>
                        <br/>
                        <input type="email" placeholder="Your Email" className='w-full md:w-1/2 p-3 mb-5 rounded-lg border border-purple-100 hover:border-purple-300 hover:transition duration-300 ease-in-out cursor-pointer'/>
                        <input type="text" placeholder="Subject" className='w-full md:w-1/2 p-3 mb-5 rounded-lg border border-purple-100 hover:border-purple-300 hover:transition duration-300 ease-in-out cursor-pointer'/>
                        <br/>
                        <textarea placeholder="Your Message" className='w-full md:w-1/2 p-3 mb-5 rounded-lg border border-purple-100 hover:border-purple-300 hover:transition duration-300 ease-in-out h-40 cursor-pointer'></textarea>
                        <br/>
                        <button type="submit" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-400 hover:transition duration-300 ease-in-out">Send Message</button>
                    </form>
                </div>
            </div> 
        </section>
  )
}


export default Contact;
