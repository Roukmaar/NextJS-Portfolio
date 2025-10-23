import React from 'react'

function Projects() {
  return (
        <section className='bg-[rgba(201,201,228,0.6)]'>
            <div className="container py-10 mx-auto px-6 md:px-12">
                <div className="text-center mb-10">
                    <p className='text-purple-700 text-xl text-center mb-2'>What I Did?</p>
                    <h2 className="text-4xl font-bold mb-20 text-gray-800">My Projects</h2>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex-1  border-t-1 border-violet-300 rounded-lg shadow-lg p-10'>
                            <img src='/online education.png'
                                    className='rounded-lg w-full mb-3'/>
                            <h2 className='text-xl text-purple-700 mb-5'>
                                Online Education
                            </h2>
                        </div>
                        <div className='flex-1 border-t border-violet-300 rounded-lg shadow-lg p-10'>
                            <img src='/Qiupid-WordPress-Dating-Theme.jpg'
                                    className='rounded-lg w-full mb-3'/>
                            <h2 className='text-xl text-purple-700 mb-5'>
                                Dating Website
                            </h2>
                        </div>
                                            <div className='flex-1 border-t border-violet-300 rounded-lg shadow-lg p-10'>
                            <img src='/Responsive-Devices-Screen-Mockup-01.jpg'
                                    className='rounded-lg w-full mb-3'/>
                            <h2 className='text-xl text-purple-700 mb-5'>
                                Personal Blog
                            </h2>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
  )
}

export default Projects;