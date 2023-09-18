import "./Whoweare.scss";
const Whoweare = () => {
  return (
    <section className="whoweare">
      <div className="container">
        <h2 className="title">
          WHO <span className="titleBold">WE ARE</span>
        </h2>
        <p className="whoweare_description">
          <span className="whoweare_descriptionBold">a team of enthusiasts </span>who are fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="whoweare__secondDescription">
          <span className="whoweare__secondDescriptionBold">We believe </span>that nature has the power to inspire, strengthen character and provide
          new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating
          unforgettable memories.
        </p>
        <div className="whoweare_rightText">
          <p>From vacationers </p>
          <p className="whoweare__active">to active travelers</p>
          <p className="whoweare__thin">we have a tour for everyone.</p>
        </div>
        <p className="whoweare__bottomDescr">
          <span className="whoweare__bottomDescrBold">We use methods </span> that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.
        </p>
      </div>
    </section>
  );
};
export default Whoweare;
