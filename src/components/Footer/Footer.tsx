import "./Footer.scss";

type FooterProps = {
  logo: string, 
  title: string, 
  paragraph: string, 
}

const Footer : React.FC<FooterProps> = ({logo, title, }) =>{
  return <footer className="footer">
    <p>{title} Product</p>
    <p>{title} Features</p>
    <p>{title} Resources</p>
    <h3>{logo} HANDYFIX</h3>
    <h3>{title} About</h3>
    <h3>{title} Blog</h3>
    <h3>{title} Support</h3>


  </footer>
 
}

export default Footer;
