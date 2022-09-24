import { Link, NavLink } from "react-router-dom";
import logoSinESpoiler from "../../assets/img/cine_logo_lentes.png"

const Header = () => {
    return (
      <header className="header">
        <nav className="nav">
          <div className="container elements elements--header-nav">
            <Link to="/">
              <img src={logoSinESpoiler} alt="Logo Sin E Spoiler" width="40" height="40" className="nav__logo" />
            </Link>
            <ul className="menu">
              <li>
                <NavLink
                  to="/peliculas"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                >
                  Películas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;