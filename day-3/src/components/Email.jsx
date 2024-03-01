import { useState } from "react";

export default function Email() {
  const [emailText, postEmail] = useState("");
  const [password, updatePassword] = useState("");

  function getEmailText(event) {
    postEmail(event.target.value);
  }

  function submitEmail() {
    console.log(emailText);
  }

  function getPassword(event) {
    updatePassword(event.target.value);
  }

  function postPassword() {
    console.log(password);
  }

  return (
    <div>
      <input
        type="email"
        onChange={getEmailText}
        placeholder="Enter Your Email"
        required
      />
      <input type="password" name="" id="" onChange={getPassword} required />

      <button onClick={() => {submitEmail(); postPassword();}}>Submit</button>
    </div>
  );
}
