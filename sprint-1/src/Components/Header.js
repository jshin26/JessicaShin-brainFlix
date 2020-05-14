import React from 'react';
import ReactDOM from 'react-dom'
import './header.scss'

export class Header extends React.Component {
    render () {
        return (
            <header className="header">

                <div className="header--inner">
                    <img className="header__logo" src='../Assets/Logo/Logo-brainflix.svg'/>
                    <div className="header__search-container">
                        <i className="header__search-icon"></i>
                        <input className="header__search" type="text" placeholder="Search"></input>
                    </div>
                    <button className="header__button btn">
                        <i className="header__button-icon"></i>
                        UPLOAD
                    </button>
                </div>
                
            </header>
        )
    }
}