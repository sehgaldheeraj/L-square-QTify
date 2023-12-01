/* eslint-disable import/no-anonymous-default-export */
import Card from "../Card";
import "./section.css";
import { useState } from "react";
import Carousel from "../Carousel";

export default ({ title, data, navid, type }) => {
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
        <Carousel navid={navid} data={data} type={type} />
      ) : (
        <div className="card-container">
          {data.map((card) => (
            <Card data={card} type="albums" />
          ))}
        </div>
      )}
    </div>
  );
};
