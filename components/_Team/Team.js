"use client";

import "./Team.css";
import CircleButton from "../_sharedComponents/_CircleButton/CircleButton";
import { useState } from "react";

const team = [
  {
    img: "/team1.webp",
    name: "Mr. Sandeep Tyagi",
    designation: "Founder & CEO",
    subtext:
      "Mr. Sandeep Tyagi has 30+ years of experience in portfolio management, analytics, and consulting. He pursued Bachelors in Technology from IIT Delhi (1986-90) and MBA from Columbia Business School(1993-94). He is also a CQF from London. Prior to Estee, Mr. Tyagi founded a consulting and analytics firm - Inductis - in 2000, which was later acquired by EXL.",
  },
  {
    img: "/team2.webp",
    name: "Vivek Sharma",
    designation: "Investment Head",
    subtext:
      "Vivek Has been in trading and investing field for 20 years now. He is a graduate from IIT Kharagpur. He has traded international markets for over 10 years with Futures First, where we setup their Energy Trading Desk. He has trained 100's of successful traders during his time with Futures First.",
  },
];

const Team = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const leftArrowHandler = () => {
    setCurrIndex((currIndex - 1 + 2) % 2);
  };

  const rightArrowHandler = () => {
    setCurrIndex((currIndex + 1) % 2);
  };

  return (
    <div className="team">
      <p className="team-heading">
        Meet Estee <span> Team </span>
      </p>
      <div className="team-cards">
        {team.map((item, index) => {
          if (index != currIndex)
            return (
              <div key={index} className="hidden team-card">
                <div className="team-card-bg" />
                <img loading="lazy" src={item.img} alt="icon" />
                <div className="team-desc">
                  <p className="team-desc-name">{item.name}</p>
                  <p className="team-desc-designation">{item.designation}</p>
                  <p className="team-desc-subtext">{item.subtext}</p>
                </div>
              </div>
            );
          else
            return (
              <div key={index} className="team-card">
                <div className="team-card-bg" />
                <img loading="lazy" src={item.img} alt="icon" />
                <div className="team-desc">
                  <p className="team-desc-name">{item.name}</p>
                  <p className="team-desc-designation">{item.designation}</p>
                  <p className="team-desc-subtext">{item.subtext}</p>
                </div>
              </div>
            );
        })}
      </div>
      <div className="arrows">
        <CircleButton
          onClick={() => {
            leftArrowHandler();
          }}
          icon={"/left-arrow.svg"}
          backgroundColor={"white"}
          borderColor={"#A73A3A"}
        />
        <CircleButton
          onClick={() => {
            rightArrowHandler();
          }}
          icon={"/right-arrow.svg"}
          backgroundColor={"#A73A3A"}
          borderColor={"#A73A3A"}
        />
      </div>
    </div>
  );
};

export default Team;
