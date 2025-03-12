import "./Advantages.css";
import CardV1 from "../_sharedComponents/_CardV1/CardV1";

const advantages = [
  {
    bg: "/technology.webp",
    title: "Technology",
    icon: "/cloud.svg",
  },
  {
    bg: "/team.webp",
    title: "Team",
    icon: "/people-network.svg",
  },
  {
    bg: "/data.webp",
    title: "Data",
    icon: "/data.svg",
  },
];

const Advantages = () => {
  return (
    <section>
      <p className="advantages-heading">
        Adding Alpha through <span>{`Estee's 3 fundamental advantages`}</span>
      </p>
      <div className="advantages-cards">
        {advantages.map((item, index) => {
          if (index != 2)
            return (
              <CardV1
                bg={item.bg}
                title={item.title}
                icon={item.icon}
                key={index}
              />
            );
          else
            return (
              <CardV1
                className="hidden-adv"
                bg={item.bg}
                title={item.title}
                icon={item.icon}
                key={index}
              />
            );
        })}
      </div>
      <div className="advantages-cards">
        <CardV1
          className="adv-2"
          bg={advantages[2].bg}
          title={advantages[2].title}
          icon={advantages[2].icon}
        />
      </div>
    </section>
  );
};

export default Advantages;
