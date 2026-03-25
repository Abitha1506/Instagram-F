import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
    <div className='m-3'>
        <div className='d-flex flex-column gap-3'>
            <img className='logotxt' src='src/assets/InstagramTxt.png' alt='' />
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat-dots"></i>Messages</div>
            <div><i className="bi bi-suit-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
             <Link to="/profile/abi_dev" className="text-dark text-decoration-none">
            <div><i className="bi bi-person-circle"></i>Profile</div>
            </Link>      
        </div>
          <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3" >
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
    </>
  )
}

export default Sidebar;
