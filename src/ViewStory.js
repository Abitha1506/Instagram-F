import React from "react";

function ViewStory({ story, closeStory }) {
  return (
    <div className="story-overlay">
      <div className="story-modal">
        <span className="close-btn" onClick={closeStory}>✖</span>

        <img src={story.image} alt="story" className="story-image" />

        <div className="story-user">
          <img src={story.userProfilePic} alt="dp" className="rounded-circle" />
          <span>{story.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewStory;