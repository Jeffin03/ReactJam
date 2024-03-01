import { useState } from "react";

export default function Name() {
  const [nameText, viewText] = useState("");

  function updateNameText(event) {
    viewText(event.target.value);
  }

  function displayText() {
    console.log(nameText);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={updateNameText}
      />
      <button onClick={displayText}>Display Text</button>
    </div>
  );
}
