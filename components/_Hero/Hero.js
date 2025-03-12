import Navbar from "../_Navbar/Navbar";
import "./Hero.css";
import Contact from "../_Contact/Contact";
import IconCircle from "../_sharedComponents/_IconCircle/IconCircle";
import Image from "next/image";

const uspList = [
  {
    icon: "/icon1.svg",
    main: "20,000+",
    sub: "Trusted by 20,000+ Clients",
  },
  {
    icon: "/icon2.svg",
    main: "1500+ Cr",
    sub: "Assets under management",
  },
  {
    icon: "/icon3.svg",
    main: "14+ Years",
    sub: "Of consistent  performances",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-gradient">
        <Image fill src="/gradient.svg" alt="gradient" priority />
      </div>
      <div className="hero-gradient-2">
        <Image fill src="/gradient2.webp" alt="gradient" priority />
      </div>

      <Navbar />
      <p className="hero-heading">
        Use <span>Power Of Systematic Investing</span>
        <br />
        To Build Wealth
      </p>
      <p className="hero-sub-heading sub-1">{"ESTEE's Quant PMS"}</p>
      <p className="hero-sub-heading sub-2">{"ESTEE's Portfolio Management Services"}</p>
      <Image alt="hero" width="1425" height="663" className="hero-img" src="/hero-img.webp" priority />
      <div className="hero-bottom">
        <div className="usp">
          {uspList.map((item, index) => {
            return (
              <div className="usp-item" key={index}>
                <IconCircle icon={item.icon} />
                <div className="usp-text">
                  <p className="usp-main">{item.main}</p>
                  <p className="usp-sub">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero-contact">
          <p className="hero-contact-heading">Get To Know More:</p>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Hero;
