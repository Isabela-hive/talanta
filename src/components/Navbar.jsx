import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './styles/navbar.css';
import logo from '../images/loho.png';

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [dropdownTwo, setDropDownTwo] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  const handleDropDownTwo = () => {
    setDropDownTwo(!dropdownTwo);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <NavLink exact to="/talentsearch" activeClassName="active">
          Talent Search
        </NavLink>
        <NavLink to="/content" activeClassName="active">
          Content
        </NavLink>
        <NavLink to="/resources" activeClassName="active">
          Resources
        </NavLink>
        <NavLink to="/activities" activeClassName="active">
          Activities
        </NavLink>
        <NavLink to="/talents" activeClassName="active">
          Talents
        </NavLink>
      </div>
      <div className="search-icon">
        <FaSearch />
      </div>
      <div className="navbar-icons">
        <button className="login-button" onClick={handleDropDownTwo}>
          Login
          <MdKeyboardArrowDown style={{ fontSize: '20px', color: 'black' }} />
          {dropdownTwo && (
            <div className="dropDown1">
              <span className="active">
                <a>Google</a>
              </span>
              <span>
                <a>Facebook</a>
              </span>
              <span>
                <a>Email</a>
              </span>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
