import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__header">
          <a href="/">
            <span className="hero__logo">CarpTravel</span>
          </a>
          <button className="hero__menu">Menu</button>
        </div>
        <p className="hero__subLogo">
          7<span className="hero__subLogoDays">Days</span>
          <span className="hero__subLogoJourney">Journey</span>
        </p>
        <h1 className="hero__title">
          <span className="hero__titleBold">Uncover </span>
          Carpathian’s Secrets
        </h1>
        <p className="hero__location">Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        <p className="hero__text">
          We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button className="hero__callButton">Join now</button>
      </div>
    </section>
  );
};
export default Hero;
