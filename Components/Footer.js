import Image from "next/image";
import ape from "../assets/images/logofinal.png";
import neonLogo from "../assets/images/neonLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const Footer = () => {
  return (
    <footer className="xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 flex flex-col items-center justify-center mb-5">
      <div>
        <Image
            src={neonLogo}
            objectFit="contain"
            layout="intrinsic"
            width={300}
            height={200}
            alt=""
          />
      </div>
      <div className="text-cente flex justify-evenly items-center neontextyellowr w-full text-xl mb-5">
          <hr className="w-3/12 in:hidden lineneonpink"></hr>
          <h1 className="neontextyellow text-center mx-2">
            © 2022 Degentlemen's Club
          </h1>
          <hr className="w-3/12 in:hidden lineneonpink"></hr>
        </div>
        <div className="flex text-white space-x-4">
          <a
            target="_blank"
            href="https://discord.gg/KYeQnxTX"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="w-10 h-10" icon={faDiscord} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/DegentlemensNFT"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="w-10 h-10" icon={faTwitter} />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
