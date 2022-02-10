import Image from 'next/image';
import ape from '../assets/images/image00001.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
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
                <p>© 2021 Degentlemens's Club NTFs</p>
                <div className='flex-col'>
                    <a className='cursor-pointer'  onClick={() => Swal.fire(
                        'Degentlemenss Club NTFs & Conditions',
                        'Esse nostrud minim in fugiat anim nulla eu commodo incididunt ea aliqua amet cillum culpa. Ad ad officia aute laborum qui amet laborum minim ullamco veniam et labore irure incididunt. Labore eiusmod ad aliquip veniam irure laboris consequat veniam exercitation minim commodo eu.',
                        'question'
                        )
                    }>
                        <u>Degentlemens's Club NTFs & Conditions</u>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;