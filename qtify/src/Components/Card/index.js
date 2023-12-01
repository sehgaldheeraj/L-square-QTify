/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import "./card.css";
import Tooltip from "@mui/material/Tooltip";
export default ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "albums":
        return (
          <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-img-frame">
                  <img className="card-img" src={data.image} />
                </div>
                <div className="card-content">
                  <div className="card-content-pill">
                    <span>{data.follows} follows</span>
                  </div>
                </div>
              </div>
              <p className="card-label">{data.label}</p>
            </div>
          </Tooltip>
        );

      case "songs":
        return (
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img-frame">
                <img className="card-img" src={data.image} />
              </div>
              <div className="card-content">
                <div className="card-content-pill">
                  <span>{data.likes} likes</span>
                </div>
              </div>
            </div>
            <p className="card-label">{data.label}</p>
          </div>
        );
    }
  };

  return getCard(type);
};
