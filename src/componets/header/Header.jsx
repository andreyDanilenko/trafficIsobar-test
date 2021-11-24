import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/header-logo.svg'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src={Logo} alt="" />
                    </div>
                    <ul className="header__links">
                        <li className="header__link"><NavLink to='/'>Главная</NavLink></li>
                        <li className="header__link"><NavLink to='/example'>Примеры</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
