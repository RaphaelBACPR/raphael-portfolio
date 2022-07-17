import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";


import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="infomation-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(41)99631-8674</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>raphaelsfreitaswd@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Curitiba-PR</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
