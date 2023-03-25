import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <p>My name: {profile.fullName}</p>
                <p>About me: {profile.aboutMe}</p>
                <span>Contacts</span>
                <ul>
                    <li>github: {profile.contacts.github}</li>
                    <li>instagram: {profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;