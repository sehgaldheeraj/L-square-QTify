/* eslint-disable import/no-anonymous-default-export */
import Button from "../Button";
import SearchBox from "../SearchBox";
import "./Navbar.css";
export default () => {
  return (
    <div className="navbar">
      <img src="logo192.png" alt="logo" width={67} height={34} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};
