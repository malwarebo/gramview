import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import DownloadButton from "./DownloadButton";

function App() {
  const [username, setUsername] = useState("");

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} />
      <ProfilePicture username={username} />
      <DownloadButton username={username} />
    </div>
  );
}

export default App;
