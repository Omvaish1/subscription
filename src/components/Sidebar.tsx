import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDoorClosed,
  faEnvelope,
  faFileLines,
  faGear,
  faMessage,
  faUserPlus,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <FontAwesomeIcon className="sidebar-icon" icon={faBars} />{" "}
        <FontAwesomeIcon className="sidebar-icon" icon={faUsersLine} />
        <FontAwesomeIcon className="sidebar-icon" icon={faMessage} />
        <FontAwesomeIcon className="sidebar-icon" icon={faUserPlus} />
        <FontAwesomeIcon
          id="selected"
          className="sidebar-icon"
          icon={faEnvelope}
        />
        <FontAwesomeIcon className="sidebar-icon" icon={faFileLines} />
        <FontAwesomeIcon className="sidebar-icon" icon={faGear} />
        <FontAwesomeIcon className="sidebar-icon" icon={faDoorClosed} />
      </div>
    </div>
  );
}
