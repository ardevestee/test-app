import './CardV2.css';

const CardV2 = ({icon,iconBg,Description,className}) => {
    return (
        <div className={`${className} card-v2`}>
            <div className="card-v2-bg"/>
            <div className="card-v2-icon" style={{backgroundColor:iconBg}}>
                <img loading="lazy"  src={icon} alt='icon'/>
            </div>
            {Description}
        </div>
    )
}

export default CardV2;