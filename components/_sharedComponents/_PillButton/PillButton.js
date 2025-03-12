import Link from "next/link";
import "./PillButton.css";

const PillButton = ({ color, icon, text, textColor, fontWeight, url }) => {
  return (
    <Link
      className="pill-button"
      href={url}
      target="_blank"
      style={{
        backgroundColor: color,
        borderColor: color,
      }}
    >
      <img loading="lazy" className="pill-button-icon" src={icon} alt="icon" />
      <p
        style={{
          color: textColor,
          fontWeight,
        }}
      >
        {text}
      </p>
    </Link>
  );
};

export default PillButton;
