import React from "react";
import s from './MyPosts.modules.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <Post likesCount={4} />
          <Post likesCount={2}/>
        </div>
      </div>
  )
}

export default MyPosts;