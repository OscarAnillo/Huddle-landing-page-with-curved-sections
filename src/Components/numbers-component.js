import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const NumbersComponent = () => {
  const numbersRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".numbers-row",
      {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: ".numbers-row",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".numbers-row",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section className="numbers-section">
      <div className="numbers-row" ref={numbersRef}>
        <div>
          <img src="images/icon-communities.svg" alt="" />
          <h1>1.4K+</h1>
          <p>Communities Formed</p>
        </div>
        <div>
          <img src="images/icon-messages.svg" alt="" />
          <h1>2.7m+</h1>
          <p>Messages Sent</p>
        </div>
      </div>
    </section>
  );
};
