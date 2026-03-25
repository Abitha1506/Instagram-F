import React, { useEffect, useState } from 'react';
import ViewStory from './ViewStory';

function Stories() {
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/story')
      .then(data => data.json())  
      .then(data => setStories(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <div className="story d-flex">
      {stories.length > 0 ? (
        stories.map(story => (
          <div className='mx-1' 
          key={story.id} 
          onClick={() => setActiveStory(story)}>
            <div className='story-ring'>
            <img className="story-dp rounded-circle" src={story.userProfilePic} alt="story" />
            </div>
            <p className='text-truncate' style={{width:'50px'}}>{story.username}</p> 
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>

     {/* Story Modal */}
      {activeStory && (
        <ViewStory
          story={activeStory}
          closeStory={() => setActiveStory(null)}
        />
      )}
    </>
  );
}

export default Stories;