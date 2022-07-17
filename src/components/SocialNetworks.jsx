import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/raphael-freitas-a39974b6/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/RaphaelBACPR" },
  { name: "instagram", icon: <FaInstagram />, link: "https://instagram.com/raphaelsfreitas" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
