import { BsFacebook, BsGithub, BsGlobe, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container">
          <ul className="menu menu--footer">
            <li>
              <a
                href="https://www.linkedin.com/in/elliotgaramendi/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/elliotgaramendi/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/elliotgaramendi"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ElliotXLeo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://elliotxleo.github.io/portafolio-web-elgs/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__icon"
              >
                <BsGlobe />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;