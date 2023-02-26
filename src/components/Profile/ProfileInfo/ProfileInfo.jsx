import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div><Preloader /></div>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="main"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"test status"} />
                <p>My name: {props.profile.fullName}</p>
                <p>About me: {props.profile.aboutMe}</p>
                <span>Contacts</span>
                <ul>
                    <li>github: {props.profile.contacts.github}</li>
                    <li>instagram: {props.profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;