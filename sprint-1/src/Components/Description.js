import React from 'react';
import './header.scss'

export class Description extends React.Component {
    render () {
        return (
            <section className="description">

                <div className="description--inner">
                    <h1>BMX Rampage: 2018 Highlights</h1>
    
                    <div>
                        <p>By Red Cow</p>
                        <p>Time</p>
                    </div>
    
                    <div>
                        <div>
                            <i></i>
                            <p>1,001,023</p>
                        </div>
                        <div>
                            <i></i>
                            <p>110,985</p>
                        </div>
                    </div>
    
                    <p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
    
                </div>

            </section>
        )
    }
}