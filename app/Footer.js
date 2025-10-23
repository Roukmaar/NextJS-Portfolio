import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
return (
    <section className='bg-[rgba(201,201,228,0.6)]'>
        <hr className='mb-6 mx-6 border-t-2 border-purple-100' />
        <div className="text-center p-6">
            <p>&copy; 2024 Roukmaar. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <a
                    href="#"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="Facebook"
                >
                    <FaFacebookF size={20} />
                </a>

                <a
                    href="#"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="Twitter"
                >
                    <FaTwitter size={20} />
                </a>

                <a
                    href="#"
                    aria-label="Google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="Google"
                >
                    <FaGoogle size={20} />
                </a>

                <a
                    href="#"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="Instagram"
                >
                    <FaInstagram size={20} />
                </a>

                <a
                    href="#"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="GitHub"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href="#"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition"
                    title="LinkedIn"
                >
                    <FaLinkedin size={20} />
                </a>
            </div>
            </div>
    </section>
)
}


export default Footer;