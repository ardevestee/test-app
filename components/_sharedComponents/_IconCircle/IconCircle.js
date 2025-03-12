import './IconCircle.css';

const IconCircle = ({icon}) => {
    return (
        <div className="icon-container">
            <img loading="lazy"  src={icon} alt="icon" />
        </div>
    )
}

export default IconCircle;