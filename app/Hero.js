import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-t from-[rgba(201,201,228,0.6)] to-white py-20">
            <div className="flex flex-col items-center text-center md:text-left">
            <p className="text-purple-700 text-lg mb-2">Who Am I?</p>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">About Me</h2>
          </div>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/passsportpoto.jpg"
            alt="About Me"
            className="w-65 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Hi! I’m Roukmaar, a passionate frontend web designer and developer. I love creating clean and modern websites that provide great user experiences.
          </p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            With a strong focus on responsive design and usability, I help clients bring their ideas to life on the web.
          </p>
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
