import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const FooterComponent = () => {
  return (
    <>
      <div className="footer-img"></div>
      <footer className="footer">
        <div className="footer-container d-flex-footer">
          <div>
            <h2 className="newsletter">Newsletter</h2>
            <p className="newsletter-paragraph">
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass your email
              address
            </p>
            <form className="form">
              <input type="text" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <img src="images/logo.svg" alt="" className="footer-logo" />
            <p className="footer-lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quim sem.
            </p>
            <div className="footer-contact-row">
              <div className="div-img">
                <img src="images/icon-phone.svg" alt="" />
              </div>
              <div className="div-p">
                <p>Phone: +1-543-123-4567</p>
              </div>
            </div>
            <div className="footer-contact-row">
              <div className="div-img">
                <img src="images/icon-email.svg" alt="" />
              </div>
              <div className="div-p">
                <p>example@company.com</p>
              </div>
            </div>
            <div className="socials">
              <FaFacebookSquare />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
