/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import "./card.css";
export default ({ imageSrc, followCount, label }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imageSrc} />
        </div>
        <div className="card-content">
          <div className="card-content-pill">
            <span>{followCount} follows</span>
          </div>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
};
