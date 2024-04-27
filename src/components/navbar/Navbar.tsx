import { FC } from "react";

import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
