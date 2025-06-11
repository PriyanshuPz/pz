import { FiLayout } from "react-icons/fi";
import { LuBook, LuUser, LuTarget } from "react-icons/lu";

const headerNavLinks = [
  { title: "About", url: "/", icon: <LuUser color="#FFFFFF" /> },
  { title: "Blog", url: "/blog", icon: <LuBook color="#FFFFFF" /> },
  {
    title: "Projects",
    url: "/projects",
    icon: <LuTarget color="#FFFFFF" />,
  },
  {
    title: "GuestBook",
    url: "/guestbook",
    icon: <FiLayout color="#FFFFFF" />,
  },
];

export default headerNavLinks;
