/* eslint-disable import/no-anonymous-default-export */
import Card from "../Card";
import "./section.css";

export default ({ title, data }) => {
  return (
    <div className="section">
      <h1 className="title">{title}</h1>
      <div className="card-container">
        {data.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.image}
            followCount={card.follows}
            label={card.title}
          />
        ))}
      </div>

      {/* <h1>New Albums</h1> */}
    </div>
  );
};
