import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMoneyCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const RoadMap = () => {
    return ( 
        <div data-aos="fade-up" className="text-white md:rounded-lg md:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="text-center text-3xl uppercase mb-10">
                <h1>The RoadMap</h1>
            </div>
            <div className="grid lgmm:grid-cols-3 gap-5 lg:p-10 in:px-3">

                <div data-aos="flip-right" className='flex group flex-col w-full h-128 border border-white rounded-lg '>
                    <div className='bg-Navbar-10 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl h-1/2'>
                        <FontAwesomeIcon icon={faComment}/>
                    </div>
                    <div className='flex justify-center items-center h-1/2 px-8 text-center tracking-wide text-xl duration-300 group-hover:bg-Navbar-10 group-hover:text-Containers-10'>
                        <p>After sellout, 10% of the <span>eth</span> will go to the <span>Degentlemen's' Community wallet and the community will decide what we will spend it on.</span></p>
                    </div>
                </div>

                <div data-aos="flip-right" className='flex group flex-col w-full h-128 border border-white rounded-lg '>
                    <div className='bg-Navbar-10 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl h-1/2'>
                        <FontAwesomeIcon icon={faMoneyCheck}/>
                    </div>
                    <div className='flex justify-center items-center h-1/2 px-8 text-center tracking-wide text-xl duration-300 group-hover:bg-Navbar-10 group-hover:text-Containers-10'>
                        <p>After sellout, 10% of the <span>eth</span> will go to the <span>Degentlemen's' Community wallet and the community will decide what we will spend it on.</span></p>
                    </div>
                </div>

                <div data-aos="flip-right" className='flex group flex-col w-full h-128 border border-white rounded-lg '>
                    <div className='bg-Navbar-10 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl h-1/2'>
                        <FontAwesomeIcon icon={faLightbulb}/>
                    </div>
                    <div className='flex justify-center items-center h-1/2 px-8 text-center tracking-wide text-xl duration-300 group-hover:bg-Navbar-10 group-hover:text-Containers-10'>
                        <p>After sellout, 10% of the <span>eth</span> will go to the <span>Degentlemen's' Community wallet and the community will decide what we will spend it on.</span></p>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default RoadMap;