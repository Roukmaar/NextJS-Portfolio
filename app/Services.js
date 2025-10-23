import Image from 'next/image';
import React from 'react'

function Services() {
    return (
        <section className='bg-[rgba(201,201,228,0.6)]'>
            <div className="container py-10 mx-auto px-6 md:px-12">
                <div className="text-center mb-10">
                    <p className='text-purple-700 text-xl text-center mb-2'>What I Do?</p>
                    <h2 className="text-4xl font-bold mb-20 text-gray-800">My Services</h2>
                    <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex-1  border-t-1 border-violet-300 rounded-lg shadow-lg p-10'>
                        <img src='/pencil-case.svg'
                                className='h-10 w-full mb-3'/>
                        <h2 className='text-xl text-purple-700 mb-5'>
                            Design
                        </h2>
                        <p>I design visually appealing, modern and sleek designs that reflects your brands unique identity.</p>
                    </div>
                    <div className='flex-1 border-t border-violet-300 rounded-lg shadow-lg p-10'>
                        <img src='/responsive.svg'
                                className='h-10 w-full mb-3'/>
                        <h2 className='text-xl text-purple-700 mb-5'>
                            Building
                        </h2>
                        <p>I build user-friendly responsive and adaptive websites that seamlessly adjusts to various devices and encourages engagement.</p>
                    </div>
                    </div>
                </div>
            </div> 
        </section>
)
}


export default Services;