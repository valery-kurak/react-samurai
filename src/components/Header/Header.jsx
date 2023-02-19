import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="logo"/>
                <div className={s.loginBlock}>
                    { props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
        </header>
    )
}

export default Header;