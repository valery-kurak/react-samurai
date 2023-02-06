import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) { 
        props.setUsers([
            {id: 1, photoUrl: 'https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png',
                followed: false, fullName: 'Valery1', status: 'status1', location: {country: 'Belarus', city: 'Minsk'} },
            {id: 2, photoUrl: 'https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png',
                followed: true, fullName: 'Valery2', status: 'status2', location: {country: 'Ukraine', city: 'Kyiv'} },
            {id: 3, photoUrl: 'https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png',
                followed: false, fullName: 'Valery3', status: 'status3', location: {country: 'Poland', city: 'Warsaw'} }
        ]);
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt='avatar' />
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => { props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) } }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;