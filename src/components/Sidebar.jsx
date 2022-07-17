import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Raphael Silva Freitas" />
      <p className="title">Desenvolvedor FullStack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
