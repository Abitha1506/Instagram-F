import React, { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://instagram-b.onrender.com")
      .then(res => res.json())
      .then(data => setProfile(data[0]))
      .catch(err => console.log(err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="profile-header d-flex">
        <img
          src={profile.userProfilePic}
          alt="dp"
          className="profile-dp rounded-circle"
        />

        <div>
          <h4>{profile.username}</h4>
          <button className="btn btn-outline-dark btn-sm">Edit Profile</button>
        </div>
      </div>

      {/* Stats */}
      <div className="profile-stats d-flex justify-content-around">
        <span><b>{profile.posts}</b> posts</span>
        <span><b>{profile.followers}</b> followers</span>
        <span><b>{profile.following}</b> following</span>
      </div>

      {/* Bio */}
      <div className="profile-bio">
        <b>{profile.name}</b>
        <p>{profile.bio}</p>
      </div>

    </div>
  );
}

export default Profile;