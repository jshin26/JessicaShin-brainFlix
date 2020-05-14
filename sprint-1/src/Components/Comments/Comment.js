import React from 'react';
import './Comments.scss';

export class Comment extends React.Component {
    render() {
        let {name, date, comment} = this.props;

        return (

            <section className="comment">
                <div className="comment--inner">
                    <div className="comment__box">
        
                        <div className="comment--left">
        
                        </div>
        
                        <div className="comment--right">
        
                            <div className="comment__info">
                                <p className="comment__name">{name}</p>
                                <p className="comment__date">{date}</p>
                            </div>
        
                            <div>
                                <p className="comment__comments">{comment}</p>
                            </div>
        
                        </div>
        
                    </div>
                </div>
            </section>
        )
    }
}