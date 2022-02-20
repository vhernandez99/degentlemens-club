import Image from "next/image";
import ImageNft from "../assets/images/ntfimage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

//data-aos="fade-up"
const TheTeam = () => {
    return ( 
        <div data-aos="fade-up" className="neondiv text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="text-center flex justify-evenly items-center neontextyellow text-3xl mb-10">
                <hr className="w-5/12 in:hidden lineneonpink"></hr>
                    <h1>MEET THE TEAM</h1>
                <hr className="w-5/12 in:hidden lineneonpink"></hr>
            </div>

            <div className="">
                <div className="lg:flex w-full justify-evenly">
                    <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
                        <h1 className="mb-3">Founder</h1>
                        <div className="bg-white rounded-full w-64 h-64 flex justify-center items-center p-12">
                            <Image alt=""  src={ImageNft}/>
                        </div>
                        <p className="mt-3"><a>@FALSECRACKZZ</a></p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
                        <h1 className="mb-3">Founder</h1>
                        <div className="bg-white rounded-full w-64 h-64 flex justify-center items-center p-12">
                            <Image alt=""  src={ImageNft}/>
                        </div>
                        <p className="mt-3"><a>@FALSECRACKZZ</a></p>
                    </div>
                </div>

                <div className="lg:flex mt-10 w-full justify-evenly">
                    <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
                        <h1 className="mb-3">Founder</h1>
                        <div className="bg-white rounded-full w-64 h-64 flex justify-center items-center p-12">
                            <Image alt=""  src={ImageNft}/>
                        </div>
                        <p className="mt-3"><a>@FALSECRACKZZ</a></p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
                        <h1 className="mb-3">Founder</h1>
                        <div className="bg-white rounded-full w-64 h-64 flex justify-center items-center p-12">
                            <Image alt=""  src={ImageNft}/>
                        </div>
                        <p className="mt-3"><a>@FALSECRACKZZ</a></p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
                        <h1 className="mb-3">Founder</h1>
                        <div className="bg-white rounded-full w-64 h-64 flex justify-center items-center p-12">
                            <Image alt=""  src={ImageNft}/>
                        </div>
                        <p className="mt-3"><a>@FALSECRACKZZ</a></p>
                    </div>
                </div>
            
            </div>
        </div>
     );
}
 
export default TheTeam;