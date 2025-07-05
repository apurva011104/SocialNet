import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGear} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <FontAwesomeIcon
          icon={faHome}
          style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
        />
      </Link>
      <FontAwesomeIcon
        icon={faGear}
        style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
      />
      <FontAwesomeIcon
        icon={faBell}
        style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
      />
      <Link to="">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
        />
      </Link>
    </div>
  );
};

export default NavIcons;
