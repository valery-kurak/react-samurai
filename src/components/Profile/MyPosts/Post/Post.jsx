import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
          <img src="https://images.unsplash.com/photo-1646734006394-fcd38d618943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="post avatar"/>
          { props.message }
          <div>
            <span>like</span> { props.likesCount }
          </div>
        </div>
  )
}

export default Post;