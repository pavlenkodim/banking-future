import type { FC } from "react";
import cat from "../assets/img/cat.png";
import "./NotFound.css";

const NotFound: FC = () => (
  <div className="notfound-root">
    <div className="error">404</div>
    <div className="img">
      <img src={cat} alt="cat" />
      <h1 className="okak">ОКАК</h1>
    </div>
  </div>
);

export default NotFound;
