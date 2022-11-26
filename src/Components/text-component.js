export const TextComponent = () => {
  return (
    <>
      <div className="bg-top-image"></div>
      <div className="bg-color">
        <div className="text-container d-flex">
          <div>
            <img src="images/illustration-grow-together.svg" alt="" />
          </div>
          <div>
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
          <div>
            <img src="images/illustration-flowing-conversation.svg" alt="" />
          </div>
          <div>
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
          <div>
            <img src="images/illustration-your-users.svg" alt="" />
          </div>
          <div>
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
