import "./Button.css";

import { useState } from "react";
export default function Button({ text, color }) {
  // const btnStyle = {
  //     backgroundColor: color,
  // }

  const [count, setCount] = useState(100);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="button" onClick={handleClick}>
      {text} {count}
    </button>
  );
}
