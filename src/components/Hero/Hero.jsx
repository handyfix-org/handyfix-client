import "../Hero/Hero.scss";
import HeroImage from "../../assets/images/Hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__content-container">
          <h1 className="hero__heading">Seamless Home Solutions</h1>
          <p className="hero__description">
            Welcome to Handy Fix, your one-stop destination for all your home
            repair and maintenance needs!
          </p>
          <Link className="hero__button">Book Today</Link>
        </div>
        <img className="hero__image" src={HeroImage} alt="HandyMan" />
      </section>
    </>
  );
}

export default Hero;
