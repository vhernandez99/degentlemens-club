import Image from "next/image";
import ImageNft from "../assets/images/ntfimage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

//data-aos="fade-up"
const TheTeam = () => {
    return ( 
        <div data-aos="fade-up" className="text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="grid lg:grid-cols-3 gap-4">
            <div data-aos="flip-right" className="group w-full mt-8">
            <div className="bg-Navbar-150 group-hover:bg-Navbar-10 w-full h-128 duration-300">
                <div className="flex justify-center negativeteamimg">
                    <Image alt="" width={250} height={280} src={ImageNft}/>
                </div>
                <div>
                    <div className="w-full flex flex-col my-5 text-xl items-center">
                        <h1 className="mb-2 group-hover:text-Navbar-150 duration-300">Jon Doe</h1>
                        <h6 className="group-hover:text-Navbar-150 duration-300">Art Designer</h6>
                    </div>
                    <div className="flex w-full justify-evenly mt-8 text-5xl">
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div data-aos="flip-right" className="group w-full mt-8">
            <div className="bg-Navbar-150 group-hover:bg-Navbar-10 w-full h-128 duration-300">
                <div className="flex justify-center negativeteamimg">
                    <Image alt="" width={250} height={280} src={ImageNft}/>
                </div>
                <div>
                    <div className="w-full flex flex-col my-5 text-xl items-center">
                        <h1 className="mb-2 group-hover:text-Navbar-150 duration-300">Jon Doe</h1>
                        <h6 className="group-hover:text-Navbar-150 duration-300">Art Designer</h6>
                    </div>
                    <div className="flex w-full justify-evenly mt-8 text-5xl">
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div data-aos="flip-right" className="group w-full mt-8">
            <div className="bg-Navbar-150 group-hover:bg-Navbar-10 w-full h-128 duration-300">
                <div className="flex justify-center negativeteamimg">
                    <Image alt="" width={250} height={280} src={ImageNft}/>
                </div>
                <div>
                    <div className="w-full flex flex-col my-5 text-xl items-center">
                        <h1 className="mb-2 group-hover:text-Navbar-150 duration-300">Jon Doe</h1>
                        <h6 className="group-hover:text-Navbar-150 duration-300">Art Designer</h6>
                    </div>
                    <div className="flex w-full justify-evenly mt-8 text-5xl">
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="bg-Navbar-0 duration-300 group-hover:bg-Navbar-150 group-hover:text-Navbar-0 rounded-full p-2 text-Containers-10">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default TheTeam;