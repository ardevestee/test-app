"use client";

import CircleButton from "../_sharedComponents/_CircleButton/CircleButton";
import "./Testimonials.css";
import { useState } from "react";

const testimonials = [
  {
    testimonial:
      "My husband and I have been using Estee products since 2010. We have received regular updates and consistent returns especially with the I-Alpha product. The staff at Estee are extremely professional and we have found this to be the best and safest way to invest our money.",
    name: "Vera and Ashutosh Garg",
    location: "Delhi",
  },
  {
    testimonial:
      "When I invested in Estee I was a bit scared because there was a clause which said subject to stock market conditions. But after 2 years I was happy with the growth and more importantly I was happy with their honesty. Great place to entrust your savings. Would recommend to anybody without hesitation",
    name: "Mr Mahadevanv",
    location: "",
  },
  {
    testimonial:
      "I started investing in Estee's products from 2020. I was looking for safe products to park my money and came across thei I-Alpha product. Apart from the returns which have been impressive, I am impressed by their professionalism",
    name: "Gautam Pande",
    location: "",
  },
];

const Testimonials = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const leftArrowHandler = () => {
    setCurrIndex((currIndex - 1 + 3) % 3);
  };

  const rightArrowHandler = () => {
    setCurrIndex((currIndex + 1) % 3);
  };

  return (
    <div className="testimonials">
      <p className="testimonials-heading">
        What people say <span> about us </span>
      </p>
      <div className="testimonials-carousel">
        {/* <CircleButton className='hidden' icon={left} backgroundColor={'white'} size={'54px'} borderColor={'#A73A3A'} iconSize={'27px'}/> */}
        <div className="testimonials-cards">
          {testimonials.map((item, index) => {
            if (index != currIndex)
              return (
                <div key={index} className="hidden testimonials-card">
                  <img loading="lazy"  src={'/stars.svg'} alt="stars" />
                  <p className="testimonial-text">{item.testimonial}</p>
                  <hr className="testimonials-line-break" />
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-location">{item.location}</p>
                </div>
              );
            else
              return (
                <div key={index} className="testimonials-card">
                  <img loading="lazy"  src={'/stars.svg'} alt="stars" />
                  <p className="testimonial-text">{item.testimonial}</p>
                  <hr className="testimonials-line-break" />
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-location">{item.location}</p>
                </div>
              );
          })}
        </div>
        {/* <CircleButton className='hidden' icon={right} backgroundColor={'#A73A3A'} size={'54px'} borderColor={'#A73A3A'} iconSize={'27px'}/> */}
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

export default Testimonials;
