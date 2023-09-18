import "./Contacts.scss";
const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="title">
          Contact <span className="titleBold">us</span>
        </h2>
        <div className="contacts__phoneContainer">
          <div>
            <p className="contacts__phones">+38 (098) 12 34 567</p>
            <p className="contacts__phones">+38 (073) 12 34 567</p>
          </div>
          <p className="contacts__phonesTitle">Phone number</p>
        </div>
        <div>
          <p>support@carptravel.com</p>
          <p>E-mail</p>
        </div>
        <div>
          <p>Follow us</p>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>youtube</li>
            <li>tiktok</li>
          </ul>
        </div>
        <form>
          <label>
            Full name
            <input type="text" />
          </label>
          <label>
            E-mail
            <input type="email" />
          </label>
          <label>
            Message
            <textarea />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
export default Contacts;
