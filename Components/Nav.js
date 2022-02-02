import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [navigator, cambiarEstadoNavigador]=useState(false);

    const ChangeEstadoNavigador = () =>{
        cambiarEstadoNavigador(!navigator);
    }

    return ( 
        <header className='text-white xl:ml-52 xl:mr-52 bg-black z-50 relative'>
            <div className='w-full flex justify-end nii:text-sm text-4xl mb-5 nii:mb-8 ni:mt-1 pt-3'>
                <ul className='flex justify-end items-center h-auto w-2/6'>
                    <li className='mr-4 text-black bg-white rounded-full p-2'> <FontAwesomeIcon icon={faInstagram}/> </li>
                    <li className='mr-4 text-black bg-white rounded-full p-2'> <FontAwesomeIcon icon={faYoutube}/> </li>
                    <li className='mr-4 text-black bg-white rounded-full p-2'> <FontAwesomeIcon icon={faDiscord}/> </li>
                    <li className='mr-4 text-black bg-white rounded-full p-2'> <FontAwesomeIcon icon={faTwitter}/> </li>
                </ul>
            </div>
            <div className='in:hidden lg:flex w-full text-xl '>
                <ul className='flex justify-around items-center w-6/12 border-b-2 border-b-slate-50 border-t-2 border-t-slate-50'>
                    <li> <a> Home </a> </li>
                    <li> <a> About </a> </li>
                    <li> <a> RoadMap </a> </li>
                </ul>
                <div className='w-2/12 h-20 flex justify-center items-center'>
                    <Image src={Logo} objectFit='contain'/>
                </div>
                <ul className='flex justify-around items-center w-6/12 border-b-2 border-b-slate-50 border-t-2 border-t-slate-50'>
                    <li> <a> Mint </a> </li>
                    <li> <a> Faq </a> </li>
                    <li> <a> Team </a> </li>
                </ul>
            </div>
            <div className='ni:hidden flex pb-5'>
                <div className='w-1/3 flex justify-center items-center text-5xl'>
                    <FontAwesomeIcon onClick={ChangeEstadoNavigador} icon={faBars}/>
                </div>
                <div className='w-2/3'>
                    <div className='w-1/2 h-10 flex justify-center items-center'>
                        <Image src={Logo} objectFit='contain' height={100}/>
                    </div>
                </div>
            </div>
            
            <div className={navigator === true ?
                'block'
            :
                'hidden'
            }>
                <ul className='text-center pt-3 pb-1'>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                    <li className='mb-5'> <a href='#'>dasdasd</a> </li>
                </ul>
            </div>
        </header>
     );
}
 
export default Nav;