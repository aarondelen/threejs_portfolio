import React from 'react'
import { useState} from "react";
import { navLinks } from "../constants/index.js"

const NavItems = () => {
    return(
        <ul className='nav-ul'>
            {navLinks.map(({id, name, href}) => (
                <li key={id} className='nav-li' aria-label={name}>
                    <a href={href} className='nav-li_a' onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((i) => !i);
    }

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center mx-auto py-5 c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                    Aaron
                </a>

                <button onClick={toggleMenu} aria-label="Toggle Menu" className='text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex'>
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                </button>

                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>
            </div>
        </div>


            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav> 
            </div>
    </header>
  )
}

export default Navbar
