import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/images/image00001.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Nav = () => {

    const [navigator, cambiarEstadoNavigador]=useState(false);

    const ChangeEstadoNavigador = () =>{
        cambiarEstadoNavigador(!navigator);
    }

return(
    
    <header className='w-full bg-Containers-0 fixed z-10'>
        <div className='w-full flex justify-end in:justify-center md:px-5 text-2xl pt-2 in:text-sm'>
            <div className='p-2 mr-2 bg-Navbar-0 rounded-full text-Containers-0  flex justify-center items-center'>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className='p-2 mr-2 bg-Navbar-0 rounded-full text-Containers-0  flex justify-center items-center'>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className='p-2 mr-2 bg-Navbar-0 rounded-full text-Containers-0  flex justify-center items-center'>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className='p-2 mr-2 bg-Navbar-0 rounded-full text-Containers-0  flex justify-center items-center'>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
        </div>
        <nav className='in:hidden flex justify-center items-center text-xl pb-2'>
            <ul className='flex justify-evenly w-1/4 border-y-2 border-y-Navbar-0 text-Navbar-0 py-5'>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Roadmap</a></li>
            </ul>
            <div>
                <div className='mx-3 bg-black rounded-full flex justify-center items-center'>
                    <Image alt='' width={80} height={80} src={Logo}/>
                </div>
            </div>
            <ul className='flex justify-evenly w-1/4 border-y-2 border-y-Navbar-0 text-Navbar-0 py-5'>
                <li><a>Mint</a></li>
                <li><a>FAQ</a></li>
                <li><a>Team</a></li>
            </ul>
        </nav>
        <nav className='flex py-2 lg:hidden text-Navbar-0'>
            <div onClick={ChangeEstadoNavigador} className='w-3/12 flex justify-center items-center text-2xl'>
                <div>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
            <div className='w-9/12 flex justify-end items-center'>
                <div className='mx-3 w-3/12 bg-Containers-0 rounded-full flex justify-center items-center'>
                    <Image alt='' width={80} height={80} src={Logo}/>
                </div>
            </div>
        </nav>
        {
            navigator && (
                <div className='bg-Containers-0'>
                    <ul className='text-white flex flex-col justify-center items-center space-y-4 py-4'>
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li><a>Roadmap</a></li>
                        <li><a>Mint</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Team</a></li>
                    </ul>
                </div>
            )}
    </header>
);

}
 
export default Nav;