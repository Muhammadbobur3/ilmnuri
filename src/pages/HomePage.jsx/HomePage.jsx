import './HomePage.scss';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import Menu from '../../assets/images/icons/menu.svg';
import LessonsArabic from '../../assets/images/lessons-img.png';
import Lessons2 from '../../assets/images/lessons2.png';
import Lessons3 from '../../assets/images/lessons3.png';
import Lessons4 from '../../assets/images/lessons4.png';
import Lessons5 from '../../assets/images/lessons5.png';
import Lessons6 from '../../assets/images/lessons6.png';
import Lessons7 from '../../assets/images/lessons7.png';
import Play from '../../assets/images/play.svg';
import IntroAudio from '../../assets/audio/mahzun-bolma.mp3'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { Link } from 'react-router-dom'

function Home() {

    const muiTheme = createMuiTheme({});

    const [open, setOpen] = useState(true)
    const [className, setClassName] = useState('header__nav')

    useEffect(() => {
        if (open) {
            setClassName('header__nav')
        }
        else {
            setClassName('header__nav--open')
        }

    }, [open])

    const useStyles = makeStyles((theme) => {
        return {
          root: {
            background: 'transparent',
          },

          playIcon: {
            width: '30px',
            color: '#fff',
          },

          pauseIcon: {
            width: '30px',
            color: '#fff',
          },

          volumeIcon: {
              width: '30px',
              color: '#fff'
          },

          progressTime: {
            color: '#fff',
          },

          mainSlider: {
            color: '#fff',
            '& .MuiSlider-rail': {
              color: '#fff   ',
            },
            '& .MuiSlider-track': {
              color: '#fff',
            },
            '& .MuiSlider-thumb': {
              color: '#fff',
            },
          },
        };
      });

    return (
        <>
        <header className="header">
            <div className="container header__container">
                <a href="/">
                    <img className="header__logo" src={Logo} alt="logo" width="109" height="51" />
                </a>

                <nav className={className}>
                    <ul className="header__list">
                        <li className="header__item">
                            <a className="header__link" href="#about">Biz haqimizda</a>
                        </li>

                        <li className="header__item">
                            <Link className="header__link" to="/">Ma'ruzalar</Link>
                        </li>

                        <li className="header__item header__item--registration">
                            <Link className="header__link header__link--registration" to="/registration">Ro'yhatdan o'tish</Link>
                        </li>

                        <li className="header__item header__item--login">
                            <a className="header__link header__link--login" href="/">Kirish</a>
                        </li>
                    </ul>

                </nav>
                <button className="header__menu-btn" onClick={() => setOpen(!open)}>
                    <img className="header__menu-img" src={Menu} alt="Menu"/>
                </button>
            </div>

            <div className="container">
                <div className="header__scientists">

                    <p className="header__text">Аhli sunna val-jamoa mazhabi asosida pok aqiyda va musaffo Islomga intilish, Qurʼon va sunnatni oʼrganib, amal qilish, islomiy maʼrifat taratish, salafi solih – ulugʼ mujtahidlarga ergashish, kengbagʼirlik va birodarlik ruhini tarqatish.</p>
                    <span className="header__author">Ahmad Donish</span>

                </div>


                <ThemeProvider theme={muiTheme}>
                     <AudioPlayer
                       className="header__mp"
                       width="100%"
                       useStyles={useStyles}
                       src={IntroAudio}
                     />
                </ThemeProvider>;


            </div>
        </header>

        <main>

            <section className="lessons">

                <div className="container">
                    <ul className="lessons__list">
                        <li className="lessons__item">
                            <img src={LessonsArabic} alt="lessons" width="280" height="180" />
                            <button className="lessons__play-btn">
                                <img className="lessons__play-img" src={Play} alt="" width="40" height="40" />
                            </button>
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons2} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons3} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons4} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons5} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons6} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons7} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>

                        <li className="lessons__item">
                            <img src={Lessons6} alt="lessons" width="280" height="180" />
                            <div className="lessons__box">
                                <h3 className="lessons__item-title">Arab</h3>
                                <p className="lessons__text">Qur'on va sunnatga asoslanib odob-axloq qoidalari</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="about" className="imams">
                <ul className="imams__list">
                    <li className="imams__item">
                        <h3 className="imams__name">Rahimberdi domla Rahmonov</h3>
                        <span className="imams__span">Imom</span>
                        <p className="imams__text">Reference site about Lorem Ipsum, giving information on its origins, as well as a random.</p>
                    </li>

                    <li className="imams__item">
                        <h3 className="imams__name">Rahimberdi domla Rahmonov</h3>
                        <span className="imams__span">Imom</span>
                        <p className="imams__text">Reference site about Lorem Ipsum, giving information on its origins, as well as a random.</p>
                    </li>

                    <li className="imams__item">
                        <h3 className="imams__name">Rahimberdi domla Rahmonov</h3>
                        <span className="imams__span">Imom</span>
                        <p className="imams__text">Reference site about Lorem Ipsum, giving information on its origins, as well as a random.</p>
                    </li>
                </ul>
            </section>
            <section className="students">
                <div className="container">
                <ul className="students__list">
                    <li className="students__item">
                        <p className="students__text">O'quvchilar</p>
                        <span className="students__count">247 ta</span>
                    </li>

                    <li className="students__item">
                        <p className="students__text">Bitiruvchilar</p>
                        <span className="students__count">100 ta</span>
                    </li>

                    <li className="students__item">
                        <p className="students__text">Test topshirganlar</p>
                        <span className="students__count">147 ta</span>
                    </li>
                </ul>
                </div>
            </section>

        </main>

        </>
    )
}

export default Home