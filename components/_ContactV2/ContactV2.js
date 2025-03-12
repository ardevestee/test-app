"use client";
import Image from "next/image.js";
import Contact from "../_Contact/Contact.js";
import styles from "./styles.module.css";

export default function ConttactV2() {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <span className={styles.requestCalText}>
          Request <span className={styles.requestCalTextcolor}>Callback</span>
        </span>
        <div className={styles.contactContainer}>
          <Contact />
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.image}>
          <Image fill src={"/man-smiling.webp"} alt="man-smiling" />
        </div>
      </div>
    </div>
  );
}
