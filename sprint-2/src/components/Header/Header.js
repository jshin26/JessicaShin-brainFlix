import React from 'react';
import './Header.scss'
import logoImage from '../../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import uploadIcon from '../../assets/Icons/SVG/Icon-upload.svg';
import userImage from '../../assets/Images/Mohan-muruge.jpg'


// HEADER

const Header = () => {
 
    return (
        <header className="header">

            <div className="header--inner">
                <img className="header__logo" src={logoImage} alt="brainFlix logo"/>
                <div className="header--flexbox">
                    <form className="header__search-container">
                        <img className="header__search-icon" src={searchIcon} alt="searchIcon"/>
                        <input className="header__search" type="text" placeholder="Search"/>
                    </form>
                    <div className="header__btn-container">
                        <button className="header__upload btn">
                            <img className="header__upload-icon" src={uploadIcon} alt="uploadIcon"/>
                            <p className="header__upload-text">UPLOAD</p>
                        </button>
                        <img className="header__userImg" src={userImage} alt="userImage"/>
                    </div>
                </div>
            </div>
            
        </header>
    )

}

export default Header;