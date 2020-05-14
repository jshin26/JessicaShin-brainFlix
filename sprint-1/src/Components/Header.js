import React from 'react';
import './header.scss'

export class Header extends React.Component {
    render () {
        return (
            <header className="header">

                <div className="header--inner">
                    <img className="header__logo" src="../Assets/Logo/Logo-brainflix.svg" alt="brainFlix logo"/>
                    <div className="header__search-container">
                        <i className="header__search-icon"></i>
                        <input className="header__search" type="text" placeholder="Search"/>
                    </div>
                    <div className="header__btn-container">
                        <button className="header__upload btn">
                            <i className="header__upload-icon"></i>
                            UPLOAD
                        </button>
                        <img className="header__userImg" src="../Assets/Images/Mohan-muruge.jpg" alt="userImage"/>
                    </div>
                </div>
                
            </header>
        )
    }
}