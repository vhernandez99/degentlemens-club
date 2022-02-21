import Image from 'next/image';
import ape from '../assets/images/logofinal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
const Footer = () => {
    return ( 
        <footer className='md:flex text-white xl:ml-52 xl:mr-52 p-8 bg-Containers-0 rounded-lg pl-6 pr-6 border-t-Containers-10 border-b-2 border-b-Containers-10'>
            <div className='md:w-1/3 text-xl'>
                <p>© 2021 Degentlemens's Club NTFs</p>
            </div>

            <div className='md:w-1/3 h-auto pl-40 pr-40'>
                <Image src={ape} objectFit='cover'/>
            </div>

            <div className='md:w-1/3 text-right'>
                <p className='mb-6 text-xl'>Social links</p>
                <ul className='flex justify-end'>
                    <li className='mr-3'> 
                        <a target="_blank" href='https://discord.gg/KYeQnxTX' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-10 h-10' icon={faDiscord}/> 
                        </a>
                    </li>
                    <li className='mr-3'> 
                        <a target="_blank" href='https://twitter.com/DegentlemensNFT' rel="noopener noreferrer">
                        <FontAwesomeIcon className='w-10 h-10' icon={faTwitter}/> 
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;