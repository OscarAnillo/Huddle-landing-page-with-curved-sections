import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeaderComponent = () => {
  const headerRowRef = useRef(null);
  const headerMainH1 = useRef(null);
  const headerMainP = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".header-row",
      { opacity: 0, duration: 0.5, y: -50 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
    tl.fromTo(
      ".header-main h1",
      { opacity: 0, duration: 0.5, y: -50 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
    tl.fromTo(
      ".header-main p",
      { opacity: 0, duration: 0.5, y: -50 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
    tl.fromTo(
      ".header-main button",
      { opacity: 0, duration: 0.5, y: -50 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
    tl.fromTo(
      ".header-main img",
      { opacity: 0, duration: 0.5, y: -50 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
  }, []);

  return (
    <section className="header-section">
      <div className="header-row" ref={headerRowRef}>
        <div>
          <img src="images/logo.svg" alt="" />
        </div>
        <div>
          <button>Try It Free</button>
        </div>
      </div>
      <div className="header-main">
        <h1 ref={headerMainH1}>Build The Community Your Fans Will Love</h1>
        <p ref={headerMainP}>
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
