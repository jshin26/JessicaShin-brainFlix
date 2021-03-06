import React from 'react';
import './Description.scss';
import viewIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../../assets/Icons/SVG/Icon-likes.svg';


// VIDEO DESCRIPTION

const Description = (props) => {

    let {title, channel, date, views, likes, description} = props;

    return (
        <section className="description">

            <div className="description--inner">
                <h1 className="description__title">{title}</h1>

                <div className="description--flexbox">
                	<div className="description__detail">
                	    <p className="description__detail-channel">By {channel}</p>
                	    <p className="description__detail-date">{date}</p>
                	</div>
                
                	<div className="description__data">
                	    <div className="description__data-view">
                	        <img className="description__data-icon" src={viewIcon} alt="viewIcon"/>
                	        <p className="description__data-number">{views}</p>
                	    </div>
                	    <div className="description__data-like">
                	        <img className="description__data-icon" src={likeIcon} alt="likeIcon"/>
                	        <p className="description__data-number">{likes}</p>
                	    </div>
                	</div>
                </div>

                <p className="description__info">{description}</p>

            </div>

        </section>
    )
}

export default Description;