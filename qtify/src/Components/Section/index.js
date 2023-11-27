/* eslint-disable import/no-anonymous-default-export */
import Card from "../Card";
import "./section.css";
import { useState } from "react";
import Carousel from "../Carousel";

export default ({ title, data, navid }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        <h1
          className="section-toggler"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <Carousel navid={navid} data={data} />
      ) : (
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
      )}
    </div>
  );
};
