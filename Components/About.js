import Image from "next/image";
import ImageNft from "../assets/images/ntfimage.jpg";

const About = () => {
    return ( 
        <div className="text-white rounded-lg ni:flex pt-8 pr-2 bg-black pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-slate-50 border-b-2 border-b-slate-50">
            <div className="w-3/4 p-10">
                <h1 className="text-4xl mb-3"> Welcome to Lazy Lions <span className="text-amber-400">Private Island</span> </h1>
                <h3 className="text-3xl mb-6"> The island made for kings </h3>
                <p className="mb-3"> Ipsum dolore sint et exercitation ut cupidatat. Nostrud do laborum eu anim fugiat proident amet ad ipsum elit ullamco. Est quis amet sint duis aliqua Lorem veniam id. Laboris dolor officia duis ut eiusmod reprehenderit pariatur excepteur quis elit Lorem. Excepteur esse velit nulla minim voluptate velit aliqua cupidatat nostrud consequat. Dolore incididunt aute adipisicing adipisicing exercitation adipisicing amet eu. Nulla duis incididunt laborum ipsum non dolore ad. </p>
                <p className="mb-3"> Dolore cillum aliqua eu sit eiusmod laboris occaecat ad excepteur velit nostrud in officia. </p>
            </div>
            <div className="w-1/4 flex justify-center items-center">
                <Image src={ImageNft}/>
            </div>
        </div>
     );
}
 
export default About;