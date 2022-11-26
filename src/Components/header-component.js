export const HeaderComponent = () => {
  return (
    <section className="header-section">
      <div className="header-row">
        <div>
          <img src="images/logo.svg" alt="" />
        </div>
        <div>
          <button>Try It Free</button>
        </div>
      </div>
      <div className="header-main">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button type="button">Get Started For Free</button>
        <img src="images/screen-mockups.svg" alt="" />
      </div>
    </section>
  );
};
