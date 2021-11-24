import React from 'react'
import Auth from '../../assets/img/pict-auth.png'
import './about.scss'

function About() {
    return (
        <div className="about">
            <div className="about__wrapper-title">
                <div className="about__title-line-left"></div>
                <h2 className="about__title">Обо мне</h2>
                <div className="about__title-line-right"></div>
            </div>
            <div className="about__info">
                <div className="about__photo">
                    <img src={Auth} alt="" />
                </div>
                <div className="about__skills">
                    <h3 className="about__skills-title">Andrey Danilenko</h3>
                    <p className="about__skills-description">На протяжении полутора лет изучаю web разработку. В сентябре 2020 года окончил курс HTML Academy Адаптивная верстка и автоматизация. Соответственно владению навыками адаптивной и резиной верстке сайтов. Хорошее владение Java Script. В сентябре 2021 закрепил навыки пройдя курс от HTML Academy JavaScript. Архитектура клиентских приложений. На практике разобрал организацию кода согласно паттерну MVP. Познакомился с понятием Data Binding. Реализовал проект на основе ООП подхода.</p>
                    <div className="about__button-wrapper">
                        <button className="about__button">Смотреть работу</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
