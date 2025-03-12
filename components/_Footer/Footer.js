import PillButton from "../_sharedComponents/_PillButton/PillButton";
import "./Footer.css";
import CircleButtonLink from "../_sharedComponents/_CircleButtonLink/CircleButtonLink";
import Image from "next/image";

const socials = [
  {
    icon: "/facebook.svg",
    backgroundColor: "transparent",
    borderColor: "white",
    url: "https://www.facebook.com/EsteeAdvisors",
  },
  {
    icon: "/instagram.svg",
    backgroundColor: "#A73A3A",
    borderColor: "#A73A3A",
    url: "https://www.instagram.com/gulaqfintech/",
  },
  {
    icon: "/twitter.svg",
    backgroundColor: "transparent",
    borderColor: "white",
    url: "https://twitter.com/EsteeAdvisors",
  },
  {
    icon: "/linkedin.svg",
    backgroundColor: "transparent",
    borderColor: "white",
    url: "https://www.linkedin.com/company/estee-advisors/mycompany/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <p>Empowering your portfolio through quant investment</p>
        <div className="footer-buttons">
          <PillButton
            url={"mailto:pms@esteeadvisors.com"}
            text={"pms@esteeadvisors.com"}
            fontSize={"18px"}
            color={"white"}
            width={"290px"}
            icon={"/mail2.svg"}
            iconSize={"21px"}
            textColor={"#A73A3A"}
            fontWeight={"500"}
          />
          <PillButton
            url={"tel:+91-8826408100"}
            text={"+91-8826408100"}
            fontSize={"21px"}
            color={"#A73A3A"}
            width={"290px"}
            icon={"/call.svg"}
            iconSize={"21px"}
            textColor={"white"}
            fontWeight={"600"}
          />
        </div>
      </div>
      <div className="footer2">
        <div className="footer2-top">
          <Image src="/logo2.svg" height={72} width={200} alt="Footer Logo" />
          <p className="footer2-top-text">Privacy policy &ensp; | &ensp; Disclaimer & legal terms &ensp; | &ensp; Disclosures</p>
          <div className="social">
            {socials.map((item, index) => {
              return <CircleButtonLink url={item.url} key={index} icon={item.icon} size={"42px"} backgroundColor={item.backgroundColor} borderColor={item.borderColor} iconSize={"21px"} />;
            })}
          </div>
        </div>
        <hr />
        <div className="footer2-bottom">
          <p>Portfolio Manager : PMS vide SEBI Registration Number INP 000003146</p>
          <p>Copyright © 2022 Estee advisors pvt. Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
