import React from 'react';

export class NewComment extends React.Component {
    render() {
        let {name, date, comment} = this.props;

        return (

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
        )
    }
}