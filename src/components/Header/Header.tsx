

import "./Header.scss";
import Logo from "../../assets/icons/handfix.png";

function Header() {
  return <nav className="header">
    <div className="header__logo">
      <img src={Logo} className="header__logo-logo"/>
    </div>
    <ul className="header__menu">
      <div className="header__menu-container-large">
      <li className="header__menu-item">Project</li>
      <li className="header__menu-item">Worker</li>
      <li className="header__menu-item">Services</li>
      <li className="header__menu-item">Contact</li>
      </div>

      <div className="header__menu-container-short">
        <li className="header__menu-item">Login</li>
        <li className="header__menu-item header__menu-item-signup">Sign up</li>
      </div>
    </ul>
  </nav>





}

export default Header;
