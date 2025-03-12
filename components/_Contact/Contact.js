"use client";

import "./Contact.css";
import { useRef, useState, Suspense } from "react";
import { toast } from "react-hot-toast";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const Contact = () => {
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const emailInputRef = useRef();
  const [checkBox, setCheckBox] = useState(true);
  const searchParams = useSearchParams();

  const checkBoxHandler = (value) => {
    setCheckBox(value);
  };

  async function addLeadHandler(newLead) {
    let leadSrc = "PMS Landing Page";
    if (searchParams.get("utm_source") === "google_ads") {
      leadSrc = "Google Ads";
    } else if (searchParams.get("utm_source") === "Gulaq.com") {
      leadSrc = "Gulaq.com";
    } else if (searchParams.get("utm_source") === "Profile") {
      leadSrc = "Instagram";
    } else if (searchParams.get("utm_source") === "ig") {
      leadSrc = "Instagram";
    } else if (searchParams.get("utm_source") === "Gulaq") {
      leadSrc = "Gulaq.com";
    } else if (searchParams.get("utm_source") === "google") {
      leadSrc = "Google Ads";
    } else if (searchParams.get("utm_source") === "Linkedin") {
      leadSrc = "Linkedin";
    } else if (searchParams.get("utm_source") === "Facebook") {
      leadSrc = "Facebook";
    }
    const sourceObject = {
      name: newLead.name,
      number: newLead.number,
      email: newLead.email,
      investment: newLead.investment,
      timestamp: newLead.timestamp,
      utm_source: searchParams.get("utm_source"),
      lead_source: leadSrc,
      utm_medium: searchParams.get("utm_medium"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_id: searchParams.get("utm_id"),
      utm_term: searchParams.get("utm_term"),
    };

    await setDoc(doc(db, "leads", `${newLead.id}`), sourceObject);
    updateOnsalesforce({
      oid: "00D2v000001w8jx",
      retURL: "https://pms.esteeadvisors.com/",
      last_name: sourceObject.name,
      phone: sourceObject.number,
      lead_source: sourceObject.lead_source,
      recordType: "PMS",
      UTM_SOURCE__c: sourceObject.utm_source,
      UTM_MEDIUM__c: sourceObject.utm_medium,
      UTM_CAMPAIGN__c: sourceObject.utm_campaign,
      UTM_Campaign_Id__c: sourceObject.utm_id,
      UTM_Keywords__c: sourceObject.utm_term,
      email: sourceObject.email,
      Product_Name__c: "01tSz000004eLtBIAU",
    });
  }

  async function updateOnsalesforce(formData) {
    const formBody = new URLSearchParams();
    Object.keys(formData).forEach((key) => {
      formBody.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const newId = Math.floor(Math.random() * 99999999999);
    const bt = document.getElementsByClassName("submit-button");
    const newLead = {
      name: enteredName,
      number: enteredNumber,
      email: enteredEmail,
      investment: "> 50 Lakhs",
      id: String(newId),
      timestamp: new Date().toISOString(),
    };
    nameInputRef.current.value = "";
    numberInputRef.current.value = "";
    emailInputRef.current.value = "";
    setCheckBox(true);
    bt[0].setAttribute("disabled", "true");
    bt[1].setAttribute("disabled", "true");
    bt[0].classList.add("disabled");
    bt[1].classList.add("disabled");
    toast.success(
      (t) => (
        <div style={{ textAlign: "center", marginLeft: "5px" }}>
          Thank you for showing interest in PMS Services. <br /> Our quant expert will get in touch with you shortly. <br />
          <button className="toast-ok" onClick={() => toast.dismiss(t.id)}>
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <Image src={"/form-name.svg"} alt="icon" height={20} width={20} />
          <input type="text" ref={nameInputRef} name="name" placeholder="Name*" required />
        </div>
        <div className="input-container">
          <Image height={20} width={20} src={"/form-call.svg"} alt="icon" />
          <input type="tel" pattern="[0-9]*" ref={numberInputRef} name="number" placeholder="Number*" required />
        </div>
        <div className="input-container">
          <Image height={20} width={20} src={"/form-email.svg"} alt="icon" />
          <input type="email" name="email" ref={emailInputRef} placeholder="Email*" required />
        </div>
        <button type="submit" className="submit-button">
          <p>Request Callback</p>
        </button>
        <div className="form-checkbox">
          <input type="checkbox" required checked={checkBox} onChange={(ev) => checkBoxHandler(ev.target.checked)} />
          <p>I authorize Estee Advisors Pvt.Ltd. to contact me. This will override registry on the NDNC</p>
        </div>
        <p className="form-guidelines">As per SEBI guidelines, minimum investment required is of ₹50 Lakhs</p>
      </form>
    </Suspense>
  );
};

export default Contact;
