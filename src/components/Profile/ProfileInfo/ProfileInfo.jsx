import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
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