import "./Footer.scss";
import Facebook from "../../../src/assets/icons/facebook.png"
import Youtube from "../../../src/assets/icons/youtube.png"
import Instagram from "../../../src/assets/icons/instagram.png"
import Twitter from "../../../src/assets/icons/twitter.png"

type FooterProps = {
  logo: string, 
  features: string, 
  paragraph: string, 
}

const Footer : React.FC<FooterProps> = ({logo, features, }) =>{
  return <footer className="footer">
    <p className="footer__feature">{features} Product</p>
    <p className="footer__feature">{features} Features</p>
    <p className="footer__feature">{features} Resources</p>
    <h3>{logo} HANDYFIX</h3>
    <p className="footer__feature">{features} About</p>
    <p className="footer__feature">{features} Blog</p>
    <p className="footer__feature">{features} Support</p>
    <img className="footer__icon" src={Facebook} alt="facebook-icon" />
    <img className="footer__icon" src={Youtube} alt="facebook-icon" />
    <img className="footer__icon" src={Instagram} alt="facebook-icon" />
    <img className="footer__icon" src={Twitter} alt="facebook-icon" />
  </footer>
 
}

export default Footer;
