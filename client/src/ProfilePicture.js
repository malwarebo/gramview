import React, { useState, useEffect } from "react";
import "./ProfilePicture.css";

function ProfilePicture({ username }) {
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  useEffect(() => {
    async function fetchProfilePictureUrl() {
      const response = await fetch(
        `https://www.instagram.com/${username}/?__a=1`
      );
      const data = await response.json();
      const profilePictureUrl = data.graphql.user.profile_pic_url_hd;
      setProfilePictureUrl(profilePictureUrl);
    }

    if (username) {
      fetchProfilePictureUrl();
    }
  }, [username]);

  if (!username) {
    return null;
  }

  return (
    <div className="profile-picture">
      <img src={profilePictureUrl} alt={`${username}'s profile picture`} />
    </div>
  );
}

export default ProfilePicture;
