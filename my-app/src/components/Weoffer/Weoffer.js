import "./Weoffer.scss";
const Weoffer = () => {
  return (
    <section className="weoffer">
      <div className="container">
        <h2 className="title">
          We <span className="titleBold">offer</span>
        </h2>
        <p className="weoffer__counter">
          {" "}
          01/<span className="weoffer__counterBlur">05</span>
        </p>
        <img src="#" alt="" />
        <p className="weoffer_caption">Feel the adrenaline rush</p>
        <ul className="weoffer__list">
          <li className="weoffer__listItem">ATVs Traveling</li>
          <li className="weoffer__listItem">Rock climbing</li>
          <li className="weoffer__listItem">Hot air ballooning</li>
          <li className="weoffer__listItem">Skydiving</li>
          <li className="weoffer__listItem">Rafting</li>
        </ul>
        <p className="weoffer__description">
          Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the
          adrenaline, and enjoy the incredible views of the surrounding mountains.
        </p>
      </div>
    </section>
  );
};
export default Weoffer;
