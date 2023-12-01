/* eslint-disable import/no-anonymous-default-export */
// import useState from "react";
// import Section from "../Section";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import Carousel from "../Carousel";
import { useState } from "react";
import "./FilterSection.css";
export default ({ title, data, filters, executeFilter, type }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(filters[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--css-primary)",
          },
        }}
      >
        {filters.map((f) => (
          <Tab className="tab" key={f.key} label={f.label} />
        ))}
      </Tabs>
      <Carousel data={data} navid="filters" type="songs" />
    </div>
  );
};
