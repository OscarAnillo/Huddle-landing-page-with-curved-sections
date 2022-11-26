import { useState, useEffect } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const FooterComponent = () => {
  const [emailInput, setEmailInput] = useState({ email: "" });
  const [emailError, setEmailError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailInput({ ...emailInput, [name]: value });
  };

  const validateEmail = (value) => {
    const error = {};

    if (!value.email) {
      error.email = "An email is required!";
    } else if (!emailRegex.test(value.email)) {
      error.email = "Check your email please";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (emailRegex.test(emailInput.email)) {
      alert(`Signed up with email: ${emailInput.email}`);
      setEmailInput({ email: "" });
    }
    setEmailError(validateEmail(emailInput));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(emailInput).length === 0 && isSubmitted) {
      console.log("email");
    }
  }, [emailInput, isSubmitted]);

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
            <form onSubmit={submitHandler} className="form" autoComplete="off">
              <input
                type="text"
                name="email"
                value={emailInput.email}
                onChange={changeHandler}
              />
              <button type="submit">Subscribe</button>
              {emailError.email && <p className="error">{emailError.email}</p>}
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
