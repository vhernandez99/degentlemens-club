import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logogege.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Nav = () => {
    return ( 
        <header className='flex items-center w-full bg-Navbar-0 fixed z-10'>
            <div className='w-1/12 h-full flex justify-center items-center'>
                <div className='w-24 h-24'>
                    <Image src={Logo} />
                </div>
            </div>
            <nav className='w-7/12'>
                <ul className='flex'>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>About us</a>
                        </Link>
                    </li>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>RoadMap</a>
                        </Link>
                    </li>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>The Mint</a>
                        </Link>
                    </li>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li className='w-1/12 flex justify-center hover:text-Navbar-10 duration-300'>
                        <Link href={""} to="steps-section" spy={true} smooth={true} duration={500}>
                            <a>The Team</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='w-4/12 flex justify-end'>
                <div className='w-1/12'>
                    <FontAwesomeIcon icon={faYoutube} className='bg-black text-white text-xl rounded' />
                </div>
                <div className='w-1/12'>
                    <FontAwesomeIcon icon={faYoutube} className='bg-black text-white text-xl rounded'/>
                </div>
                <div className='w-1/12'>
                    <FontAwesomeIcon icon={faYoutube} className='bg-black text-white text-xl rounded'/>
                </div>
                <div className='w-1/12'>
                    <FontAwesomeIcon icon={faYoutube} className='bg-black text-white text-xl rounded'/>
                </div>
            </div>
        </header>

        
     );
}
 
export default Nav;