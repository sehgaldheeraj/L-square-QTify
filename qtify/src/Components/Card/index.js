/* eslint-disable import/no-anonymous-default-export */
import "./card.css";
export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src="logo192.png" />
        </div>
        <div className="card-content">
          <div className="card-content-pill">
            <span>100 follows</span>
          </div>
        </div>
      </div>
      <p className="card-label">New English Songs</p>
    </div>
  );
};
