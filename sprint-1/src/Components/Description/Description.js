import React from 'react';
import './Description.scss';
import viewIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

export class Description extends React.Component {
    render () {

        let {title, channel, date, views, likes, description} = this.props;

        return (
            <section className="description">

                <div className="description--inner">
                    <h1 className="description__title">{title}</h1>
    
                    <div className="description__detail">
                        <p className="description__detail-by">By {channel}</p>
                        <p className="description__detail-at">{date}</p>
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
    
                    <p className="description__info">{description}</p>
    
                </div>

            </section>
        )
    }
}