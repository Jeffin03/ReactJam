import { useState } from "react";

export default function File() {
  const [file, fileUpload] = useState("");

  function uploadFile(event) {
    fileUpload(event.target.value);
  }

  function loadFile() {
    console.log(file);
  }

  return (
    <div>
      <input type="file" name="" id="" onChange={uploadFile} />
      <button onClick={loadFile}>Confirm</button>
    </div>
  );
}
