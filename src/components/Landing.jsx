import React from 'react';
import UndrawBooks from '../assets/undraw_Books.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Australia`s most awarded online library platform</h1>
                        <h2>Find your dream books with <span className="purple">Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src="" alt="" className="header__img" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;