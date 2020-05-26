import React from 'react';
import './Header.scss'
import logoImage from '../../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import uploadIcon from '../../assets/Icons/SVG/Icon-upload.svg';
import userImage from '../../assets/Images/Mohan-muruge.jpg';

import {Link} from 'react-router-dom';


// HEADER

const Header = () => {
 
    return (
        <header className="header">

            <div className="header--inner">
                <Link to="/" className="header__logo">
                    <img  src={logoImage} alt="brainFlix logo"/>
                </Link>
                <div className="header--flexbox">
                    <form className="header__search-container">
                        <img className="header__search-icon" src={searchIcon} alt="searchIcon"/>
                        <input className="header__search" type="text" placeholder="Search"/>
                    </form>
                    <div className="header__btn-container">
                        <Link to="/upload" className="header__upload">
                            <button className="btn">
                                <img className="header__upload-icon" src={uploadIcon} alt="uploadIcon"/>
                                <p className="header__upload-text">UPLOAD</p>
                            </button>
                        </Link>
                        <img className="header__userImg" src={userImage} alt="userImage"/>
                    </div>
                </div>
                

            </div>
            
        </header>
    )

}

export default Header;