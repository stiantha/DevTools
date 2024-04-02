import {
  FaLink,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/stiantha",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/stiantha/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:stiant@getacademy.no",
    icon: <FaEnvelope />,
  },

  {
    index: 4,
    title: "My Portfolio",
    href: "https://stiantha.com",
    icon: <FaLink />,
  },
];
