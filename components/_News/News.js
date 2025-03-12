"use client";

import CardV2 from "../_sharedComponents/_CardV2/CardV2";
import "./News.css";
import CircleButton from "../_sharedComponents/_CircleButton/CircleButton";
import { useState } from "react";

const NewsDesc = ({ title, url }) => {
  return (
    <div className="news-desc">
      <p className="news-desc-title">{title}</p>
      <a href={url} target="_blank" className="learn-more">
        LEARN MORE
      </a>
    </div>
  );
};

const news = [
  {
    icon: '/et.svg',
    iconBg: "#ED1A3B",
    title: "Huge wealth creation opportunity in midcap space over next 5 years",
    url: "https://economictimes.indiatimes.com/markets/expert-view/etmarkets-smart-talk-huge-wealth-creation-opportunity-in-midcap-space-over-next-5-years-vivek-sharma/articleshow/93544371.cms?from=mdr",
  },
  {
    icon: '/mint.svg',
    iconBg: "#A73A3A",
    title: "Estee Advisors launches Category III fund AIF,aims to raise 200 cr",
    url: "https://www.livemint.com/news/india/estee-advisors-launches-category-iii-fund-aif-aims-to-raise-rs-200-cr-11664354161102.html",
  },
  {
    icon: '/et.svg',
    iconBg: "#ED1A3B",
    title:
      "This Columbia university alumni likes Adani Total Gas, P&G, and Nestle as ...",
    url: "https://economictimes.indiatimes.com/markets/expert-view/etmarkets-smart-talk-this-columbia-university-alumni-likes-adani-total-gas-pg-and-nestle-as-top-portfolio-picks/articleshow/95082403.cms",
  },
];

const News = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const leftArrowHandler = () => {
    setCurrIndex((currIndex - 1 + 3) % 3);
  };

  const rightArrowHandler = () => {
    setCurrIndex((currIndex + 1) % 3);
  };
  return (
    <div className="news">
      <p className="news-heading">
        Estee <span> In News</span>
      </p>
      <div className="news-cards">
        {news.map((item, index) => {
          if (index != currIndex)
            return (
              <CardV2
                className="hidden"
                key={index}
                height={"420px"}
                width={"380px"}
                icon={item.icon}
                iconBg={item.iconBg}
                Description={<NewsDesc url={item.url} title={item.title} />}
              />
            );
          else
            return (
              <CardV2
                className={""}
                key={index}
                height={"420px"}
                width={"380px"}
                icon={item.icon}
                iconBg={item.iconBg}
                Description={<NewsDesc url={item.url} title={item.title} />}
              />
            );
        })}
      </div>
      <div className="arrows">
        <CircleButton
          onClick={() => {
            leftArrowHandler();
          }}
          icon={'/left-arrow.svg'}
          backgroundColor={"white"}
          borderColor={"#A73A3A"}
        />
        <CircleButton
          onClick={() => {
            rightArrowHandler();
          }}
          icon={'/right-arrow.svg'}
          backgroundColor={"#A73A3A"}
          borderColor={"#A73A3A"}
        />
      </div>
    </div>
  );
};

export default News;
