import { LuGithub } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { FaDev } from "react-icons/fa";

const socialLinks = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/PriyanshuPz/",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/priyanshu-verma-pz/",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/PriyanshuPz",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  {
    id: "peerlist",
    name: "Peerlist",
    url: "https://peerlist.io/priyanshu_verma",
    icon: <SiPeerlist size={20} color="#FFFFFF" />,
  },
  {
    id: "hashnode",
    name: "Hashnode",
    url: "https://dev.to/priyanshu_verma",
    icon: <FaDev size={20} color="#FFFFFF" />,
  },
];

export default socialLinks;
