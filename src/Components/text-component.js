import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const TextComponent = () => {
  const bgTopRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#text-grow",
      {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: ".bg-top-image",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".bg-top-image",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#image-grow",
      {
        opacity: 0,
        duration: 1,
        x: 100,
        scrollTrigger: {
          trigger: ".bg-top-image",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".bg-top-image",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#image-flowing",
      {
        opacity: 0,
        duration: 1,
        x: 100,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#text-flowing",
      {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#text-flowing",
      {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#text-users",
      {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".d-flex-invert",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#image-users",
      {
        opacity: 0,
        duration: 1,
        x: 100,
        scrollTrigger: {
          trigger: ".bg-top-image-users",
          toggleActions: "restart none none none",
        },
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".bg-top-image-users",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="bg-top-image" ref={bgTopRef}></div>
      <div className="bg-color">
        <div className="text-container d-flex">
          <div id="image-grow">
            <img src="images/illustration-grow-together.svg" alt="" />
          </div>
          <div id="text-grow">
            <h1 className="grow-together-title">Grow Together</h1>
            <p className="grow-together-text">
              Generate meaningful discussion with your audience and build
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bottom-image"></div>
      <div>
        <div className="text-container d-flex-invert">
          <div id="image-flowing">
            <img src="images/illustration-flowing-conversation.svg" alt="" />
          </div>
          <div id="text-flowing">
            <h1 className="flowing-conversation-title">
              Flowing Conversations
            </h1>
            <p className="flowing-conversation-text">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-top-image-users"></div>
      <div className="bg-color">
        <div className="text-container d-flex">
          <div id="image-users">
            <img src="images/illustration-your-users.svg" alt="" />
          </div>
          <div id="text-users">
            <h1 className="grow-together-title">Your Users</h1>
            <p className="grow-together-text">
              Generate meaningful discussion with your audience and build
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bottom-image"></div>
    </>
  );
};
