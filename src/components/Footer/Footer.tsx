import "./Footer.scss";
import { Link } from 'react-router-dom';
import Facebook from "../../../src/assets/icons/facebook.png"
import Youtube from "../../../src/assets/icons/youtube.png"
import Instagram from "../../../src/assets/icons/instagram.png"
import Twitter from "../../../src/assets/icons/twitter.png"


type FooterProps = {
  logo: string, 
  features: string, 
  paragraph: number, 
}

const Footer : React.FC<FooterProps> = ({logo, features, paragraph}) =>{
  return <footer className="footer">
    <div className="footer__feature">
    <p className="footer__feature-title">{features} Product</p>
    <p className="footer__feature-title">{features} Features</p>
    <p className="footer__feature-title">{features} Resources</p>
    <Link to="/" className="footer__feature-logo">
    <h3>{logo} HANDYFIX</h3>
    </Link>
    <p className="footer__feature-title">{features} About</p>
    <p className="footer__feature-title">{features} Blog</p>
    <p className="footer__feature-title">{features} Support</p>
    </div>
    <section className="footer__icon">
      <a href="https://www.facebook.com/">
        <img className="footer__icon-facebook" src={Facebook} alt="facebook-icon" />
      </a>
      <a href="https://www.youtube.com/">
        <img className="footer__icon-youtube" src={Youtube} alt="facebook-icon" />
    </a>
    <a href="https://www.instagram.com/">
        <img className="footer__icon-instagram" src={Instagram} alt="facebook-icon" />
    </a>
    <a href="https://twitter.com/">
        <img className="footer__icon-twitter" src={Twitter} alt="facebook-icon" />
    </a>
    </section>
    <p className="footer__copyright">{paragraph} © 2023 HANDYFIX INC. </p>
  </footer>
 
}

export default Footer;
