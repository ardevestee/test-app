import "./Navbar.css";
import PillButton from "../_sharedComponents/_PillButton/PillButton";
import CircleButtonLink from "../_sharedComponents/_CircleButtonLink/CircleButtonLink";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image height={64} width={160} src="/Logo.svg" alt="App Logo" />
      </div>
      <div className="nav-buttons">
        <div className="mail">
          <CircleButtonLink url={"mailto:pms@esteeadvisors.com"} icon={"/mail.svg"} backgroundColor="#4040DA" borderColor="#4040DA" />
          <p>PMS@esteeadvisors.com</p>
        </div>
        <PillButton url={"tel:+91-8826408100"} text={"+91-8826408100"} color={"#A73A3A"} icon={"/call.svg"} textColor={"white"} fontWeight={"600"} />
      </div>
    </nav>
  );
};

export default Navbar;
