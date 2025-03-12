import "./CircleButton.css";

const CircleButton = ({ icon, backgroundColor, borderColor, className, onClick }) => {
  return (
    <div
      className={`${className} circle-button`}
      onClick={onClick}
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      <img loading="lazy" className="circle-button-icon" src={icon} alt="icon" />
    </div>
  );
};

export default CircleButton;
