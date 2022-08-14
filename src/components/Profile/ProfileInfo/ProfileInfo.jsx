import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="main"/>
      </div>
      <div className={s.descriptionBlock}>
        Avatar + Desc
      </div>
    </div>
  )
}

export default ProfileInfo;