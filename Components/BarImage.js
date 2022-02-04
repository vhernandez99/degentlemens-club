import React from 'react';
import Image from 'next/image';
import bar from '../assets/images/bayc-mutant-hero.jpg';
const ImageBar = () => {
    return ( 
        <div className="text-white ni:rounded-lg ni:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <Image src={bar} objectFit='cover'/>
        </div>
     );
}
 
export default ImageBar;