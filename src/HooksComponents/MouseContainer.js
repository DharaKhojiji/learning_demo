import React from "react";
import { useState } from "react/cjs/react.development";
import HooksMouse from "./HooksMouse";

function MouseContainer() {
  const[display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HooksMouse></HooksMouse>}
    </div>
  );
  }

export default MouseContainer;
