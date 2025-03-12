import "./WhyEstee.css";
import React from "react";

const WhyEstee = () => {
  return (
    <div className="why-estee">
      <div className="why-estee-container">
        <div className="whyEstee-s2-video-container">
          <iframe
            className="iframe-san-video"
            src="https://www.youtube.com/embed/-JEPx7YWPgM?si=NjkcpnT0fOWC156t"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="why-estee-text">
          <p className="why-estee-heading">
            Why <span> Estee? </span>
          </p>
          <p className="why-estee-subtext">
            Estee is a quant and analytics driven firm that was founded in 2008 when algorithmic trading was permitted by SEBI in India.
            <br />
            <br />
            Estee mastered the art of applying quant to investment approach and pioneered algorithmic investment products.
          </p>
          <div className="why-estee-pointers">
            <div className="why-estee-pointer">
              <img loading="lazy" src={"/tick-icon.svg"} alt="tick" />
              <p>Pioneers in quant investing in India</p>
            </div>
            <div className="why-estee-pointer">
              <img loading="lazy" src={"/tick-icon.svg"} alt="tick" />
              <p>Strong performance track record</p>
            </div>
            <div className="why-estee-pointer">
              <img loading="lazy" src={"/tick-icon.svg"} alt="tick" />
              <p>Trusted by 18,000+ Clients-(PMS & Investment advisory)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="whyEstee-s2-container">
        <div className="whyEstee-s2-text-container">
          <span className="whyEstee-s2-title">Quantitative Investing is revolutionizing the world of finance</span>
          <div className="whyEstee-s2-point-container">
            <img loading="lazy" src="/tick-icon.svg" alt="tick" className="whyEstee-s2-point-img" />
            <span className="whyEstee-s2-point">Data-Driven Decisions Making</span>
          </div>
          <div className="whyEstee-s2-point-container">
            <img loading="lazy" src="/tick-icon.svg" alt="tick" className="whyEstee-s2-point-img" />
            <span className="whyEstee-s2-point">No Human Bias</span>
          </div>
          <div className="whyEstee-s2-point-container">
            <img loading="lazy" src="/tick-icon.svg" alt="tick" className="whyEstee-s2-point-img" />
            <span className="whyEstee-s2-point">Consistent Performance</span>
          </div>
          <span className="whyEstee-s2-point">Find out how Quant Investing outshines Traditional approaches to investing with Mr. Vivek Sharma, VP and Investments Head at Estee Advisors.</span>
        </div>
        <div className="whyEstee-s2-video-container">
          <iframe
            className="iframe-san-video"
            width="566"
            height="331"
            src="https://www.youtube.com/embed/ihgvPFydD98?si=iBFHsMfpozkVjT41"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhyEstee;
