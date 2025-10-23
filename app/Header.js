import React from "react";
import { TfiMenu } from "react-icons/tfi";

function Header() {
    return (
        <header className="relative text-white h-auto md:h-screen overflow-hidden">
      {/* Background image */}
            <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/header.jpg')" }}>
            </div>

      {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-t from-white to-[rgba(159,136,253,0.6)]"></div>

      {/* Navbar */}
            <nav className="fixed top-0 z-20 left-0 w-full flex justify-between items-center px-6 py-4 bg-white md:h-12">
                <h2 className="md:text-2xl text-xl font-bold tracking-wide text-purple-700">Roukmaar</h2>
                <TfiMenu className="text-2xl cursor-pointer text-purple-700" />
            </nav>

      {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 py-32 md:py-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">HI! I am Roukmaar</h1>
                <p className="text-lg md:text-xl mb-6">Frontend Web Designer</p>
                <a
                href="#portfolio"
                className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-400 transition">
                Visit My Works
                </a>
            </div>
        </header>
                );
}

export default Header;
