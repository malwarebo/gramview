import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

function DownloadButton({ username }) {
  const [showPicture, setShowPicture] = useState(false);

  function handleButtonClick() {
    setShowPicture(true);
  }

  return (
    <div>
      {showPicture ? (
        <ProfilePicture username={username} />
      ) : (
        <button onClick={handleButtonClick}>View profile picture</button>
      )}
    </div>
  );
}

export default DownloadButton;
