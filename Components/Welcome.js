import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ImageNft from "../assets/images/ntfimage.jpg";

const Welcome = () => {
    return ( 
        <div data-aos="fade-up" className="text-white md:rounded-lg md:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="flex in:flex-col in:items-center lg:mx-10">
                <div className='grid grid-cols-2 lg:w-1/2 in:ml-8'>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div> 
                </div>
                <div className="flex flex-col items-start lg:w-1/2 px-10">
                    <div className="lg:text-6xl in:text-2xl in:mt-5 mb-10">
                        <h1>Welcome to Degentlemens's Club NFT</h1>
                    </div>
                    <div className="text-xl mb-10">
                        <p>Join the pride of kings and queens, and explore all the possibilities of the metaverse. We’re on a mission to build the premier Web 3.0 brand together with our community, driven by our shared passion for NFTs, gaming, and the metaverse.</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                        <a className="flex justify-between items-center bg-Navbar-10 text-Containers-0 hover:bg-Navbar-0 p-4 w-full text-xl">
                            Join the Pride on Discord
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:flex flex-row-reverse lg:mx-10 mt-10">
                <div className='grid grid-cols-2 ni:w-1/2 in:ml-8'>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div>
                    <div className='w-3/4 h-auto'>
                        <Image alt="" src={ImageNft} objectFit='contain'/>
                    </div> 
                </div>
                <div className="flex flex-col items-start lg:w-1/2 px-10">
                    <div className="lg:text-6xl mb-10 in:text-2xl in:mt-5">
                        <h1>Welcome to Degentlemens's Club NFT</h1>
                    </div>
                    <div className="text-xl mb-10">
                        <p>Web 3.0 is a wide new world with endless possibilities and new experiences, and Lazy Lions is the key to unlocking this world. <br/><br/> Lazy Lions is a limited collection of unique, programmatically generated NFTs hosted on the Ethereum blockchain. Each Lazy Lion is unique - just like you and programmatically generated from over 160 possible traits, including clothing, mane, expression, and more.</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                        <a className="flex justify-between items-center bg-Navbar-10 text-Containers-0 hover:bg-Navbar-0 p-4 w-full text-xl">
                            Purchase on OpenSea
                            <FontAwesomeIcon icon={faShip}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

     );
}
 
export default Welcome;