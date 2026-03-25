import React, { useEffect, useState } from 'react';

function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data[0]))
      .catch(err => console.log(err));

    fetch('http://localhost:5000/api/suggestion')
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='suggestions w-75 m-4'>
      {profile ?
      <div className='d-flex'>
       <img className='dp rounded-circle' src={profile.userProfilePic} alt="Profile" />
        <h5>{profile.username}</h5>
        <small className='ms-auto text-primary'>Switch</small>
      </div>
      : <p>Loading</p>}

      <div className='d-flex'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See All</b>
      </div>
      
       {suggestions.length > 0 ? (
            <div>
               {suggestions.map((suggestion)=>(
                <div key={suggestion.userId}>
                   <div className='d-flex'>
                    <img className='dp rounded-circle' src={suggestion.userProfilePic} alt="Profile Pic" />
                    <h5>{suggestion.username}</h5>
                    <p className='text-primary ms-auto'>Follow</p>
                   </div>
                  </div>
               ))}
            </div>
        ):(
            <div>
                Loading
            </div>
        )}
    </div>
    </div>
  )
}

export default Suggestions;