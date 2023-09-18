import "./Formsection.scss";
const Formsection = () => {
  return (
    <section className="formsection">
      <div className="container">
        <p className="formsection__callback">Don't miss your opportunity! Fill out the form right now and join our team!</p>
        <form className="formsection__form">
          <label htmlFor="name" className="formsection__label">
            Full name
          </label>
          <input type="text" id="name" className="formsection__input" placeholder="John Smith" />
          <label htmlFor="email" className="formsection__label">
            E-mail
          </label>
          <input type="email" id="email" className="formsection__input" placeholder="johnsmith@email.com" />
          <label htmlFor="position" className="formsection__label">
            Position
          </label>
          <input type="text" id="position" className="formsection__input" placeholder="Movie maker" />
          <label htmlFor="phone" className="formsection__label">
            Phone
          </label>
          <input type="number" id="phone" className="formsection__input" placeholder="+ 38 (097) 12 34 567" />
          <label htmlFor="message" className="formsection__label">
            Message
          </label>
          <textarea id="message" className="formsection__textarea" />
          <div className="formsection__checkbox">
            <input type="checkbox" id="checkbox" />
            <label className="formsection__checkboxLabel" htmlFor="checkbox">
              I confirm my consent to the processing of personal data.
            </label>
          </div>
          <button type="submit" className="formsection__button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
export default Formsection;
