import Image from 'next/image';
import ape from '../assets/images/bayc-footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return ( 
        <div className='md:flex text-white xl:ml-52 xl:mr-52 p-8 bg-Containers-0 rounded-lg pl-6 pr-6 border-t-Containers-10 border-b-2 border-b-Containers-10'>
            <div className='md:w-1/3'>
                <p>GET ON THE LIST</p>
                <form>
                    <input className='bg-transparent mt-5' type='text' placeholder="Email address"/>
                    <button className='' type='submit'> <FontAwesomeIcon icon={faArrowLeft}/> </button>
                </form>
            </div>
            <div className='md:w-1/3 h-auto pl-40 pr-40'>
                <Image src={ape} objectFit='cover'/>
            </div>
            <div className='md:w-1/3 text-right'>
                <ul className='flex justify-end'>
                    <li className='mr-3'> <FontAwesomeIcon icon={faInstagram}/> </li>
                    <li className='mr-3'> <FontAwesomeIcon icon={faYoutube}/> </li>
                    <li className='mr-3'> <FontAwesomeIcon icon={faDiscord}/> </li>
                    <li className='mr-3'> <FontAwesomeIcon icon={faTwitter}/> </li>
                </ul>
                <p>© 2021 Yuga Labs LLC</p>
                <div className='flex-col'>
                    <a href="#">BAYC Terms & Conditions</a>
                    <a href="#">MAYC Terms & Conditions</a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;