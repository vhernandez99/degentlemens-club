import React from 'react';
import Image from 'next/image';
import bar from '../assets/images/bayc-mutant-hero.jpg';
const ImageBar = () => {
    return ( 
        <div className='xl:ml-52 xl:mr-52'>
            <Image src={bar} objectFit='cover'/>
        </div>
     );
}
 
export default ImageBar;