import React from 'react';
import './Description.scss';
import viewIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

export class Description extends React.Component {
    render () {
        return (
            <section className="description">

                <div className="description--inner">
                    <h1 className="description__title"> BMX Rampage: 2018 Highlights</h1>
    
                    <div className="description__detail">
                        <p className="description__detail-by">By Red Cow</p>
                        <p className="description__detail-at">Time</p>
                    </div>
    
                    <div className="description__data">
                        <div className="description__data-view">
                            <img className="description__data-icon" src={viewIcon} alt="viewIcon"/>
                            <p className="description__data-number">1,001,023</p>
                        </div>
                        <div className="description__data-like">
                            <img className="description__data-icon" src={likeIcon} alt="likeIcon"/>
                            <p className="description__data-number">110,985</p>
                        </div>
                    </div>
    
                    <p className="description__info">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
    
                </div>

            </section>
        )
    }
}