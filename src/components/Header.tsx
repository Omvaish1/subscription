import {
  faBell,
  faComments,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <div className="header">
      <img className="logo" alt="" src="/logotipo_color3d.png"></img>
      <p className="heading-text">Good Morning Jane!</p>
      <div className="search-bar">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        ></input>
      </div>
      <div className="message-icons">
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faBell} />
        <img src="/intro_pic.jpg" alt="person" />
      </div>
    </div>
  );
}
