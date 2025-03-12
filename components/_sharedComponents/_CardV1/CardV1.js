import './CardV1.css';

const CardV1 = ({bg,title,icon,className=""}) => {
    return (
        <div className={`${className} card-v1`}>
            <img loading="lazy"  src={bg} alt={title}/>
            <div className="card-v1-icon">
            <img loading="lazy"  src={icon} alt={title}/>
            </div>
            <p>
            {title}
            </p>
        </div>
    )
}
 
export default CardV1;