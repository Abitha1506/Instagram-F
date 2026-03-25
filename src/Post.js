import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://instagram-b.onrender.com')
        .then((res)=> res.json())
        .then((data)=> setPosts(data))
        .catch(err=>console.log(err))
    }, []);

  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ? (
            <div>
               {posts.map((post)=>(
                <div className='my-3' key={post._id}>

                   <div className='posts d-flex align-items-center gap-2'>
                    <img
                      className='dp rounded-circle'
                      src={post.userProfilePic}
                      alt="Profile Pic"
                    />
                    <h5>{post.username}</h5>
                   </div>

                   <img
                     className='image w-100'
                     src={post.postImage}
                     alt='post'
                   />

                   <div className='my-2'>
                    <i className="bi bi-heart me-3"></i>
                    <i className="bi bi-chat me-3"></i>
                    <i className="bi bi-send"></i>
                   </div>

                   <p>{post.caption}</p>

                   <div>
                    <b>{post.likes} likes</b>
                   </div>

                </div>
               ))}
            </div>
        ):(

            <div>Loading Posts...</div>

        )}
    </div>
  )
}

export default Posts