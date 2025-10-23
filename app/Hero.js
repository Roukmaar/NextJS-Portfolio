import React from 'react'

function Hero() {
    return (
        <section className='bg-gradient-to-t md:bg-gradient-to-t from-[rgba(201,201,228,0.6)] to-white'>
            <div className="container py-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:space-x-12 ">
                <div className="md:w-55 mb-10 md:mb-0">
                    <img src="/passsportpoto.jpg" 
                        alt="About Me" 
                        className=" h-70 rounded-lg shadow-lg w-full" />
                </div>  
                <div className="md:w-1/2 text-center">
                    <p className="text-purple-700 text-xl md:ml-50 text-center mb-2">Who Am I?</p>
                    <h2 className="text-4xl text-center md:ml-50 md:text-4xl font-bold mb-4 text-gray-800">About Me</h2>
                    <p className="text-gray-600 text-xl mb-4 md:text-2xl text-start ">
                    Hi! I’m Roukmaar, a passionate frontend web designer and developer. I love creating clean and modern websites that provide great user experiences.
                    </p>
                    <p className="text-start text-gray-600 text-xl md:text-2xl pb-8">
                        With a strong focus on responsive design and usability, I help clients bring their ideas to life on the web.
                    </p>
                    <a
                        href="#portfolio"
                        className="items-center px-4 py-3 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-400 transition md:ml-50">
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero;
