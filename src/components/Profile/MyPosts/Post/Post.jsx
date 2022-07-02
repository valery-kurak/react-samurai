import React from "react";
import s from './Post.module.css';

const Post = (posts) => {
  return (
        <div className={s.item}>
          <img src="https://images.unsplash.com/photo-1646734006394-fcd38d618943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="post avatar"/>
          post 1
          <div>
            <span>{posts.likesCount} likes</span>
          </div>
        </div>
  )
}

export default Post;