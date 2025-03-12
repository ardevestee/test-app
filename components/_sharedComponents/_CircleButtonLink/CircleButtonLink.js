import Link from "next/link";

const CircleButtonLink = ({ icon, backgroundColor, borderColor, className, url }) => {
  return (
    <Link
      className={`${className} circle-button`}
      href={url}
      target="_blank"
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      <img loading="lazy" className="circle-button-icon" src={icon} alt="icon" />
    </Link>
  );
};

export default CircleButtonLink;
