import Image from "next/image";
import ntfImage from "../assets/images/ntfimage.jpg";
import Logo from '../assets/images/Logogege.png';
import ntfImagePng from "../assets/images/ntfimage.png";
import BannerImage from "../assets/images/imgmintcorner2.png";
import IconImage from "../assets/images/imgmintleft.png";

const Mint = () => {
    return ( 
        <div className="text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="text-center text-5xl mb-5">
                <h1 className="">The Mint</h1>
            </div>
            <div className="ni:flex">
                <div className="ni:w-1/2 flex justify-center items-center">
                    <Image src={ntfImagePng}/>
                </div>
                <div className="ni:w-1/2 m-5 p-5 border-4 border-amber-400 rounded-lg">
                    <div className="flex w-full">
                        <div className="w-8/12 font-bold">
                            <h1 className="text-2xl mb-3">Degentimes club</h1>
                            <h1> Whitelist can mint up to 8 Degentimes club</h1>
                        </div>
                        <div className="w-4/12 flex justify-center negativeBannerImg">
                            <Image src={BannerImage}/>
                        </div>
                    </div>

                    <div className="ni:flex">
                        <div className="ni:w-4/12">
                            <Image src={IconImage}/>
                        </div>
                        <div className="ni:w-8/12 font-bold ">
                            <h1 className="mb-2">Whitelist price 0.00 ETH public presale 0.00 ETH</h1>
                            <h1>Connect to blockchain</h1>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between ni:text-2xl mt-5">
                            <input className="bg-transparent" placeholder="0.00 ETH" type="number"/>
                            <p>5 MAX</p> 
                        </div>
                        <div className="flex justify-between border-t-2 border-b-2 border-white my-5 py-2 ni:text-2xl">
                            <h1>TOTAL</h1>
                            <h1>0.00 ETH</h1>
                        </div>
                        <div>
                            <button className="MintBtn">MINT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Mint;