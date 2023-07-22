import "./Footer.scss";
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
    <h3>{logo} HANDYFIX</h3>
    <p className="footer__feature-title">{features} About</p>
    <p className="footer__feature-title">{features} Blog</p>
    <p className="footer__feature-title">{features} Support</p>
    </div>
    <section className="footer__icon">
    <img className="footer__icon-facebook" src={Facebook} alt="facebook-icon" />
    <img className="footer__icon-youtube" src={Youtube} alt="facebook-icon" />
    <img className="footer__icon-instagram" src={Instagram} alt="facebook-icon" />
    <img className="footer__icon-twitter" src={Twitter} alt="facebook-icon" />
    </section>
    <p className="footer__copyright">{paragraph} © 2023 HANDYFIX INC. </p>
  </footer>
 
}

export default Footer;
