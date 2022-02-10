import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Metrics = () => {
    return ( 
        <div data-aos="fade-up" className="mb-10 text-white md:rounded-lg md:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">

            <div className="lg:flex justify-evenly">
                <div data-aos="flip-left" className="lg:w-3/12 py-24 flex flex-col justify-center">
                    <div className="flex text-Navbar-10 mb-12 justify-center text-7xl">
                        <FontAwesomeIcon icon={faDiscord}/>
                    </div>
                    <div className="flex mb-10 justify-center text-4xl">
                        <h1>100k</h1>
                    </div>
                    <div className="flex text-Navbar-10 justify-center text-center text-4xl">
                        <h6>Discord <br/> Members</h6>
                    </div>
                </div>
                <div data-aos="flip-left" className="lg:w-3/12 py-24 flex flex-col justify-center">
                    <div className="flex text-Navbar-10 mb-12 justify-center text-7xl">
                        <FontAwesomeIcon icon={faDiscord}/>
                    </div>
                    <div className="flex mb-10 justify-center text-4xl">
                        <h1>100k</h1>
                    </div>
                    <div className="flex text-Navbar-10 justify-center text-center text-4xl">
                        <h6>Discord <br/> Members</h6>
                    </div>
                </div>
                <div data-aos="flip-left" className="lg:w-3/12 py-24 flex flex-col justify-center">
                    <div className="flex text-Navbar-10 mb-12 justify-center text-7xl">
                        <FontAwesomeIcon icon={faDiscord}/>
                    </div>
                    <div className="flex mb-10 justify-center text-4xl">
                        <h1>100k</h1>
                    </div>
                    <div className="flex text-Navbar-10 justify-center text-center text-4xl">
                        <h6>Discord <br/> Members</h6>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Metrics;