import { useState } from "react";

const SomeComponent = () => {
  return <h2>Hello this is component</h2>;
};

const ToggleChallenge = () => {
  const [isComponentRendered, setisComponentRendered] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={() => setisComponentRendered(!isComponentRendered)}
      >
        Toggle
      </button>

      {isComponentRendered && <SomeComponent />}
    </>
  );
};

export default ToggleChallenge;
