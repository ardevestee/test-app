"use client";

import "./Products.css";
import IconCircle from "../_sharedComponents/_IconCircle/IconCircle";
import ModalCustom from "../_sharedComponents/_ModalCustom/ModalCustom";
import { useRef, useState } from "react";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { Box } from "@mui/material";
import toast from "react-hot-toast";
import { LineChart } from "@mui/x-charts";
import Image from "next/image";

const modalStyle = {
  position: "absolute",
  border: "0px ",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  boxShadow: 24,
  outline: "none",
  borderRadius: "20px",
  maxHeight: "90%",
};

const longAlphaIcons = [
  {
    icon: "/barIcon.svg",
    title: "33.2%",
    desc: "Long Alpha vs ~18% BSE 500*",
  },
  {
    icon: "/icon3.svg",
    title: "Selects Stocks",
    desc: "from BSE 500 universe",
  },
  {
    icon: "/volatility.svg",
    title: "Lower Volatility",
    desc: "than BSE 500 Index",
  },
];

const iAlphaIcons = [
  {
    icon: "/graph.svg",
    title: "~11.8%",
    desc: "CAGR",
  },
  {
    icon: "/zero.svg",
    title: "ZERO",
    desc: "Negative months since Inception",
  },
  {
    icon: "/no.svg",
    title: "NO",
    desc: "Entry Load or Exit Load",
  },
];

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const emailInputRef = useRef();
  const [checkBox, setCheckBox] = useState(true);
  const checkBoxHandler = (value) => {
    setCheckBox(value);
  };

  async function addLeadHandler(newLead) {
    await setDoc(doc(db, "leads", `${newLead.id}`), {
      name: newLead.name,
      number: newLead.number,
      email: newLead.email,
      investment: newLead.investment,
      timestamp: newLead.timestamp,
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const newId = Math.floor(Math.random() * 99999999999);
    const newLead = {
      name: enteredName,
      number: enteredNumber,
      email: enteredEmail,
      investment: "> 50 Lakhs",
      id: String(newId),
      timestamp: new Date().toLocaleString("en"),
    };
    nameInputRef.current.value = "";
    numberInputRef.current.value = "";
    emailInputRef.current.value = "";
    setCheckBox(true);
    setModalOpen(false);
    setRegistered(true);
    toast.success(
      (t) => (
        <div style={{ textAlign: "center", marginLeft: "5px" }}>
          Thank you for showing interest in PMS Services. <br /> Our quant expert will get in touch with you shortly. <br />
          <button
            className="toast-ok"
            onClick={() => {
              toast.dismiss(t.id);
              window.open("https://drive.google.com/file/d/12MESw4YaMaI2nPcjSm9BuAqhHixAdfOJ/view?usp=sharing", "_blank");
            }}
          >
            Ok
          </button>
        </div>
      ),
      {
        duration: Infinity,
      }
    );
    addLeadHandler(newLead);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const months = [
    "Sep-18",
    "Oct-18",
    "Nov-18",
    "Dec-18",
    "Jan-19",
    "Feb-19",
    "Mar-19",
    "Apr-19",
    "May-19",
    "Jun-19",
    "Jul-19",
    "Aug-19",
    "Sep-19",
    "Oct-19",
    "Nov-19",
    "Dec-19",
    "Jan-20",
    "Feb-20",
    "Mar-20",
    "Apr-20",
    "May-20",
    "Jun-20",
    "Jul-20",
    "Aug-20",
    "Sep-20",
    "Oct-20",
    "Nov-20",
    "Dec-20",
    "Jan-21",
    "Feb-21",
    "Mar-21",
    "Apr-21",
    "May-21",
    "Jun-21",
    "Jul-21",
    "Aug-21",
    "Sep-21",
    "Oct-21",
    "Nov-21",
    "Dec-21",
    "Jan-22",
    "Feb-22",
    "Mar-22",
    "Apr-22",
    "May-22",
    "Jun-22",
    "Jul-22",
    "Aug-22",
    "Sep-22",
    "Oct-22",
    "Nov-22",
    "Dec-22",
    "Jan-23",
    "Feb-23",
    "Mar-23",
    "Apr-23",
    "May-23",
    "Jun-23",
    "Jul-23",
    "Aug-23",
    "Sep-23",
    "Oct-23",
    "Nov-23",
  ];

  const dateObjects = months.map((month) => {
    const [monthName, year] = month.split("-");
    // Assuming the day is fixed to 1
    return new Date(`${monthName} 01, 20${year}`);
  });

  return (
    <div className="products">
      <p className="products-heading">
        Our <span> Products </span>
      </p>
      <hr />
      <div className="long-alpha-quant">
        <div className="products-text">
          <p className="products-subheading">
            Long Alpha <span> - Quant PMS </span>
          </p>
          <p className="products-subtext">
            Long Alpha is a multi-factor equity quant PMS launched in 2018 that aims to consistently outperform the benchmark equity index while maintaining low volatility.
          </p>
          <div className="products-icon-list">
            {longAlphaIcons.map((item, index) => {
              return (
                <div key={index} className="products-icon">
                  <IconCircle icon={item.icon} />
                  <div>
                    <p className="products-icon-title">{item.title}</p>
                    <p className="products-icon-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="quant-note">
            Since revamp 2019 <span> * </span>
          </p>
          <div
            className="products-button bt-1"
            onClick={() => {
              if (registered) {
                window.open("https://drive.google.com/file/d/12MESw4YaMaI2nPcjSm9BuAqhHixAdfOJ/view?usp=sharing", "_blank");
                return;
              }
              handleOpen();
            }}
          >
            <p>DOWNLOAD FACTSHEET</p>
            <Image height={30} width={30} alt="arrow right" src="/right-arrow.svg" />
          </div>
        </div>
        <img loading="lazy" className="quant-img" src={"/quantPms.svg"} alt="quantPms" />
        <div
          className="products-button bt-2"
          onClick={() => {
            if (registered) {
              window.open("https://drive.google.com/file/d/12MESw4YaMaI2nPcjSm9BuAqhHixAdfOJ/view?usp=sharing", "_blank");
              return;
            }
            handleOpen();
          }}
        >
          <p>DOWNLOAD FACTSHEET</p>
          <img loading="lazy" src={"/right-arrow.svg"} alt="arrow" />
        </div>
      </div>
      <div className="long-alpha-return">
        <div className="return-img">
          <LineChart
            title="Long Alpha - BSE Return Comparisions"
            xAxis={[{ data: dateObjects, position: "bottom", scaleType: "time" }]}
            series={[
              {
                data: [
                  4580364, 4452173, 4407879, 4464607, 4279705, 4129918, 4329130, 4328044, 4555132, 4568797, 4182488, 4254399, 4524885, 4849851, 4810771, 4897837, 5157250, 4995606, 4500326, 5007931,
                  4990377, 5243888, 5665582, 5954684, 6592431, 6446538, 6721180, 7111680, 7115236, 7710070, 8178842, 8532168, 8982667, 9488391, 9941936, 10163641, 10424847, 10409209, 10586166,
                  11083716, 10846524, 10087267, 10728818, 10727745, 9775083, 9178894, 10070165, 10482034, 10557505, 10582843, 10911969, 10689365, 10338754, 10114403, 10176101, 10850776, 11403081,
                  11835258, 12795097, 13363200, 14462991, 14076829, 15367674,
                ],
                showMark: false,
                label: "Estee Long Alpha",
                color: "#002060",
              },
              {
                data: [
                  4561301, 4386893, 4564350, 4601514, 4521367, 4498930, 4854508, 4851436, 4927881, 4865290, 4570109, 4549654, 4735329, 4923482, 4982519, 5014829, 5009855, 4668417, 3550112, 4092550,
                  3997536, 4329440, 4636699, 4817914, 4807475, 4932703, 5513569, 5938084, 5834251, 6297107, 6337165, 6407440, 6880615, 7006385, 7113199, 7582566, 7840754, 7864624, 7636261, 7816407,
                  7786762, 7479853, 7796689, 7752343, 7430000, 7052786, 7740932, 8112933, 7851453, 8172425, 8455377, 8188872, 7915688, 7698153, 7725585, 8079891, 8385311, 8744202, 9089598, 9034152,
                  9224772, 8960944, 9559386,
                ],
                showMark: false,
                label: "S&P BSE 500- TRI",
                color: "#C00000",
              },
            ]}
            margin={{ bottom: 80, left: 80 }}
            slotProps={{
              legend: {
                position: {
                  vertical: "bottom",
                  horizontal: "middle",
                },
                itemMarkWidth: 20,
                itemMarkHeight: 2,
                markGap: 5,
                itemGap: 10,
              },
            }}
          />
        </div>

        <div className="products-text">
          <img loading="lazy" src={"/blue-curve.svg"} alt="blue-corner" className="blue-corner" />
          <p className="products-subheading">
            Long Alpha <span> - Return Comparisons </span>
          </p>
          <p className="products-subtext">
            Long Alpha is quantitatively managed strategy that implements a rule-based trading model to remove human subjectivity. It is a flexi cap fund that allocates amongst Large Cap, Mid Cap and
            Small Cap from the BSE 500 Investible universe. The quant strategy offers the following that differentiates itself.
          </p>
          <div className="products-pointers-list">
            <div className="products-pointer">
              <img loading="lazy" src={"/tick2.svg"} alt="tick" />
              <p>Free from human bias</p>
            </div>
            <div className="products-pointer">
              <img loading="lazy" src={"/tick2.svg"} alt="tick" />
              <p>Covers and processes wide breadth of data to construct portfolio.</p>
            </div>
            <div className="products-pointer">
              <img loading="lazy" src={"/tick2.svg"} alt="tick" />
              <p>Employs 130 + micro strategies from Fundamental, Technical and Macro factors</p>
            </div>
            <div className="products-pointer">
              <img loading="lazy" src={"/tick2.svg"} alt="tick" />
              <p>No Exit Load and No Entry Load</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-2" />
      <div className="i-alpha">
        <div className="products-text">
          <p className="products-subheading">
            I Alpha <span> - Arbitrage Fund </span>
          </p>
          <p className="products-subtext">
            {`I-Alpha is Estee's Market Neutral Arbitrage product which aims to
            deliver consistent returns while maintaining nearly zero market
            exposure.`}
            <br />
            <br />
            {`Estee's algorithm identifies mispricing between various market
            instruments at any given point of time and takes hedged positions to
            capture the pricing differences. The strategy generates stable and
            consistent returns without taking any directional bets. Estee
            employs a 3 tier risk management system at a Fund level, Strategy
            Level and Operational level.`}
          </p>
          <div className="products-icon-list">
            {iAlphaIcons.map((item, index) => {
              return (
                <div key={index} className="products-icon">
                  <IconCircle icon={item.icon} />
                  <div>
                    <p className="products-icon-title">{item.title}</p>
                    <p className="products-icon-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="products-button bt-1"
            onClick={() => {
              if (registered) {
                window.open("https://drive.google.com/file/d/12MESw4YaMaI2nPcjSm9BuAqhHixAdfOJ/view?usp=sharing", "_blank");
                return;
              }
              handleOpen();
            }}
          >
            <p>DOWNLOAD FACTSHEET</p>
            <img loading="lazy" src={"/right-arrow.svg"} alt="arrow" />
          </div>
        </div>
        <img loading="lazy" className="arbitrage-img" src={"/arbitrage.svg"} alt="arbitrage" />
        <div
          className="products-button bt-2"
          onClick={() => {
            if (registered) {
              window.open("https://drive.google.com/file/d/12MESw4YaMaI2nPcjSm9BuAqhHixAdfOJ/view?usp=sharing", "_blank");
              return;
            }
            handleOpen();
          }}
        >
          <p>DOWNLOAD FACTSHEET</p>
          <img loading="lazy" src={"/right-arrow.svg"} alt="arrow" />
        </div>
      </div>
      <ModalCustom open={modalOpen} handleClose={handleClose}>
        <Box sx={modalStyle} className="modal-box">
          <div className="hero-contact">
            <p className="hero-contact-heading">Please Provide your Details</p>
            <form onSubmit={submitHandler}>
              <div className="input-container">
                <img loading="lazy" src={"/form-name.svg"} alt="icon" />
                <input type="text" ref={nameInputRef} name="name" placeholder="Name*" required />
              </div>
              <div className="input-container">
                <img loading="lazy" src={"/form-call.svg"} alt="icon" />
                <input type="tel" pattern="[0-9]*" ref={numberInputRef} name="number" placeholder="Number*" required />
              </div>
              <div className="input-container">
                <img loading="lazy" src={"/form-email.svg"} alt="icon" />
                <input type="email" name="email" ref={emailInputRef} placeholder="Email*" required />
              </div>
              <button type="submit" className="submit-button-factsheet">
                <p>Download Factsheet</p>
              </button>
              <div className="form-checkbox">
                <input type="checkbox" required checked={checkBox} onChange={(ev) => checkBoxHandler(ev.target.checked)} />
                <p>I authorize Estee Advisors Pvt.Ltd. to contact me. This will override registry on the NDNC</p>
              </div>
              <p className="form-guidelines">As per SEBI guidelines, minimum investment required is of ₹50 Lakhs</p>
            </form>
          </div>
        </Box>
      </ModalCustom>
    </div>
  );
};

export default Products;
