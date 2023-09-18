import "./Chooseus.scss";
const Chooseus = () => {
  return (
    <section className="chooseus">
      <div className="container">
        <h2 className="title">
          Choose <span className="titleBold">us</span>
        </h2>
        <p className="chooseus__titleDescr">
          Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.{" "}
        </p>
        <h3 className="chooseus__subtitle">Why us ?</h3>
        <ul className="chooseus__list">
          <li>
            <h3 className="chooseus__listTitle">Professional development</h3>
            <p className="chooseus__listDescr">We offer growth opportunities and a creative environment to nurture your talents.</p>
          </li>
          <li>
            <h3 className="chooseus__listTitle">Teamwork</h3>
            <p className="chooseus__listDescr">Join our close-knit family, where support and inspiration abound.</p>
          </li>
          <li>
            <h3 className="chooseus__listTitle">Stimulating work environment</h3>
            <p className="chooseus__listDescr">Flexibility and remote options for a comfortable experience.</p>
          </li>
          <li>
            <h3 className="chooseus__listTitle">Exciting challenges</h3>
            <p className="chooseus__listDescr">Unleash your potential through unforgettable projects showcasing Carpathian beauty.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Chooseus;
